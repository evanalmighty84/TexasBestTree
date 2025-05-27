// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                'https://texas-best-tree-api.herokuapp.com/api/contactus',
                {
                    method: 'POST',
                    body: formData, // browser sets multipart/form-data boundary
                }
            );

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                const err = await response.json();
                alert('Error: ' + (err.error || 'Unknown error occurred'));
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <section id="contact" data-stellar-background-ratio="0.5">
            <div className="container" style={{ padding: '60px 0' }}>
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2>Contact Us</h2>
                        <span className="line-bar">...</span>
                    </div>

                    <div className="col-md-8 col-sm-12 mb-4">
                        <form style={{padding:'2rem'}} id="contact-form" role="form" onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="row gx-3">
                                <div className="col-12 col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Your Phone"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        placeholder="Your Address"
                                    />
                                </div>
                                <div className="col-12 mb-3">
                  <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      required
                  />
                                </div>

                                {/* New file upload field */}
                                <div className="col-12 mb-3">
                                    <h2>
                                        Upload picture of a tree(s) (recommended)
                                    </h2>
                                    <input
                                        placeholder="upload picture of tree"
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        id="treeImage"
                                        name="treeImage"
                                    />
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary px-4">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="google-map" style={{ marginTop: '20px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d482025.82130434026!2d-96.6989!3d33.0198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1736983429546&output=embed"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
