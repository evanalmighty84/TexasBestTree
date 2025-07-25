// ServicesSection.js
import React from 'react';
import './Services.css';
import TreeCut from '../images/treecut1.jpg';
import TreeStorm from '../images/TreeStorm.jpg';
import TreeStump from '../images/TreeStump.jpg';
import TreeRemoval from '../images/TreeRemoval.jpg';

const services = [
    {
        title: 'Tree Removal',
        description:
            'Our team safely removes hazardous or unwanted trees of any size, using industry‑standard rigging and disposal methods to protect your property.',
        image: TreeRemoval,
    },
    {
        title: 'Tree Pruning & Trimming',
        description:
            'Promote healthy growth and enhance curb appeal with our precision pruning. We remove deadwood, shape canopies, and improve light penetration.',
        image: TreeCut,
    },
    {
        title: 'Stump Grinding',
        description:
            'Eliminate unsightly stumps and prevent pest infestations with our state‑of‑the‑art grinding equipment, leaving your yard ready for replanting or sod.',
        image: TreeStump,
    },
    {
        title: 'Emergency Storm Response',
        description:
            'We safely remove fallen trees and dangerous limbs after storms, minimzing damage and restoring safety to your home and business',
        image: TreeStorm,
    },
];

const ServicesSection = () => {
    const gradient = 'black';

    return (
        <section
            id="services"
            data-stellar-background-ratio="0.5"
            style={{ backgroundColor: '#fff', padding: '60px 0' }}
        >
            <div className="container">
                <div className="row">
                    {services.map((s, i) => (
                        <div className="col-md-6 col-sm-6 mb-4" key={i}>
                            <div
                                className="service-card"
                                style={{
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    height: '100%',
                                }}
                            >
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div
                                    className="service-text"
                                    style={{
                                        background: gradient,
                                        padding: '20px',
                                        textAlign: 'center',
                                        color: '#fff',
                                    }}
                                >
                                    <h3 style={{ marginBottom: '0.5rem' }}>{s.title}</h3>
                                    <p style={{ margin: 0 }}>{s.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
