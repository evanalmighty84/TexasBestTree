// HeroSection.js
import React, { useEffect, useRef, useState } from 'react';
import Treemovie from '../images/TreeMovie3.gif';
import TreeLogo from '../images/TreeCo2.png';

const HeroSection = () => {
    const [showModal, setShowModal] = useState(true);
    const modalRef = useRef(null);

    // Close modal on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowModal(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = document.querySelector('form'); // ✅ Guaranteed to select the form
        const formData = new FormData(form);

        console.log('📝 Submitting form data:', [...formData.entries()]); // optional debugging

        try {
            const response = await fetch(
                'https://texas-best-tree-api-45123f7067cd.herokuapp.com/api/contactus',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {
                alert('Message sent successfully!');
                form.reset();
                setShowModal(false);
            } else {
                alert('Server returned an error: ' + (data.error || 'Unknown'));
            }
        } catch (error) {
            console.error('❌ Frontend fetch error:', error);
            alert('An error occurred. Please try again.');
        }
    };



    return (
        <>
            {/* Modal Overlay */}
            {showModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        ref={modalRef}
                        className="modal-content p-4 rounded shadow-lg position-relative"
                        style={{
                            background: 'white',
                            maxWidth: '600px',
                            width: '90%',
                        }}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            className="btn-close position-absolute"
                            aria-label="Close"
                            onClick={() => setShowModal(false)}
                            style={{ top: '1rem', right: '1rem' }}
                        />

                        {/* Logo */}
                        <div className="text-center mb-3">
                            Enter your contact information for a free estimate
                            <br/>
                            <br/>
                            <img
                                src={TreeLogo}
                                alt="Tree Company Logo"
                                style={{ height: '40px', width: 'auto' }}
                            />
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="row gx-2">
                                <div className="col-12 col-md-6 mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-2">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Your Phone"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-2">
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
                      rows="4"
                      placeholder="Your Message"
                      required
                  />
                                </div>

                                {/* Optional file upload */}
                                <div className="col-12 mb-3">
                                    <label htmlFor="treeImage" className="form-label">
                                        Upload picture of tree (optional)
                                    </label>
                                    <input
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
                </div>
            )}

            {/* Hero Section */}
            <section
                id="home"
                data-stellar-background-ratio="0.5"
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100vh',
                }}
            >
                {/* Background animation */}
                <img
                    src={Treemovie}
                    alt="Tree background animation"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />

                {/* Dark overlay */}
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.3)',
                        zIndex: 0,
                    }}
                />

                {/* Centered text block */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(0,0,0,0.8)',
                        borderRadius: '12px',
                        padding: '20px 30px',
                        textAlign: 'center',
                        zIndex: 1,
                        maxWidth: '90%',
                    }}
                >
                    <h1 style={{ color: '#fff', margin: 0 }}>
                        Texas Best Tree Company
                    </h1>
                    <p style={{ color: '#fff', fontSize: '16px', marginTop: '0.5rem' }}>
                        Provides the highest standards of Tree Care and Tree Removal for both
                        Residential and Commercial customers. We service the entire DFW Metroplex.
                    </p>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
