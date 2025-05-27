const express = require('express');
const router = express.Router();

const { createEmail } = require('./controller/createEmail');

router.post('/api/contactUs', createEmail);

module.exports = router;
