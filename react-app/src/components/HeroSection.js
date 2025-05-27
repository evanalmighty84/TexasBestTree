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
        const form = e.target;

        // Build FormData from the <form> element
        const formData = new FormData(form);

        // (Optional) you could explicitly append the file,
        // but since your <input name="treeImage"> is inside the form,
        // FormData(form) picks it up automatically:
        //
        // const fileInput = form.elements['treeImage'];
        // if (fileInput.files.length) {
        //   formData.append('treeImage', fileInput.files[0]);
        // }

        try {
            const response = await fetch(
                'https://eclipse-pool-api-3bb6c1946b76.herokuapp.com/api/contactus',
                {
                    method: 'POST',
                    // DO NOT set Content-Type header; browser will set multipart/form-data boundary
                    body: formData,
                }
            );

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
                setShowModal(false);
            } else {
                const errorData = await response.json();
                alert('Error: ' + (errorData.error || 'Unknown error occurred'));
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    };


    return (
        <>
            {/* Modal Overlay */}
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
                            <img
                                src={TreeLogo}
                                alt="Tree Company Logo"
                                style={{ height: '40px', width: 'auto' }}
                            />
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="row gx-2">
                                {/* … your existing fields … */}

                                {/* ↓ New file‑upload field */}
                                <div className="col-12 mb-3">
                                    <label htmlFor="cf-image" className="form-label">
                                        Upload picture of tree (optional)
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        id="cf-image"
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
                        Texas Best Tree Company™
                    </h1>
                    <p style={{ color: '#fff', fontSize: '16px', marginTop: '0.5rem' }}>
                        Provides the highest standards of Tree Care and Tree Removal for both
                        Residential and Commercial clients. We service the entire Metroplex.
                    </p>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
