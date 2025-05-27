// controllers/contactController.js
const multer      = require('multer');
const streamifier = require('streamifier');
const cloudinary  = require('cloudinary').v2;
const sendEmail   = require('../utils/sendEmail');
const twilio      = require('twilio');
const pool        = require('../db/db');
require('dotenv').config();

// Twilio client & business info
const client        = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
const businessPhone = '+12145489175';
const businessEmail = 'evan.ligon@clubhouselinks.com';
const userId        = 8;

// Multer setup for in‑memory uploads
const storage = multer.memoryStorage();
const upload  = multer({ storage });

// Cloudinary setup
cloudinary.config({
    cloud_name: 'duz4vhtcn',
    api_key:    '922468697412882',
    api_secret: 'K-CAP3rlMC-ADlYo093CXaT_Jcc',
});

// Helper to stream buffer → Cloudinary
function uploadToCloudinary(buffer) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'tree_uploads' },
            (err, result) => err ? reject(err) : resolve(result)
        );
        streamifier.createReadStream(buffer).pipe(stream);
    });
}

// Route handler: accepts optional file upload AND optional JSON URL
exports.createEmail = [
    upload.single('treeImage'),
    async (req, res) => {
        try {
            // Pull form fields + optional URL
            const {
                name,
                email,
                message = '',
                phone,
                address = '',
                treeImageUrl  // new JSON field
            } = req.body;

            if (!name || !email || !phone) {
                return res.status(400).json({ error: 'Name, email, and phone are required.' });
            }

            // Sanitize phone
            let sanitizedPhone = phone.replace(/\D/g, '');
            if (sanitizedPhone.length === 10) sanitizedPhone = '+1' + sanitizedPhone;
            else if (!sanitizedPhone.startsWith('+')) sanitizedPhone = '+' + sanitizedPhone;

            // Determine imageUrl: prefer JSON URL, else uploaded file
            let imageUrl = treeImageUrl || null;
            if (!imageUrl && req.file && req.file.buffer) {
                const uploadResult = await uploadToCloudinary(req.file.buffer);
                imageUrl = uploadResult.secure_url;
            }

            console.log('ℹ️ imageUrl:', imageUrl);

            // Build HTML email
            let htmlContent = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <p><strong>Message:</strong><br>${message || 'N/A'}</p>
      `;
            if (imageUrl) {
                htmlContent += `
          <p><strong>Tree Photo:</strong><br>
            <img src="${imageUrl}" alt="Tree Image" style="max-width:100%;height:auto;"/>
          </p>`;
            }

            // Send email
            const subject = `📬 New Contact Submission from ${name}`;
            await sendEmail(businessEmail, subject, htmlContent);

            // Text customer
            await client.messages.create({
                body: `Hi ${name}, thanks for contacting Tx Best Tree Company! We’ll reach out shortly.`,
                messagingServiceSid: process.env.TWILIO_MESSAGING_SID,
                to: sanitizedPhone
            });

            // Text business
            await client.messages.create({
                body: `📬 New contact from ${name}\n📞 ${sanitizedPhone}\n📧 ${email}\n🏠 ${address}\n📩 ${message}`,
                messagingServiceSid: process.env.TWILIO_MESSAGING_SID,
                to: businessPhone
            });

            // Upsert subscriber
            const existing = await pool.query(
                `SELECT id FROM subscribers
         WHERE user_id = $1 AND (email = $2 OR phone_number = $3)`,
                [userId, email, sanitizedPhone]
            );
            if (existing.rows.length) {
                await pool.query(
                    `UPDATE subscribers
           SET name = $1, email = $2, phone_number = $3, physical_address = $4, updated_at = NOW()
           WHERE id = $5`,
                    [name, email, sanitizedPhone, address, existing.rows[0].id]
                );
            } else {
                await pool.query(
                    `INSERT INTO subscribers
           (user_id, name, email, phone_number, physical_address, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, NOW(), NOW())`,
                    [userId, name, email, sanitizedPhone, address]
                );
            }

            res.status(200).json({ success: true });
        } catch (err) {
            console.error('❌ Error in createEmail:', err);
            res.status(500).json({ error: 'Server error' });
        }
    }
];
