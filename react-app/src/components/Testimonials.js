import React from 'react';
import TreeLogo from "../images/TreeCo2.png";

const testimonials = [
    {
        name: "Melissa R.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "Texas Best Tree Company did an amazing job removing a large, dying oak from our backyard. They were professional, courteous, and cleaned up every last bit of debris. Highly recommended!",
    },
    {
        name: "Jason K.",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        review:
            "I called them for emergency storm response after last week’s windstorm. They arrived within hours, cleared fallen limbs safely, and saved us from potential damage. Fantastic service!",
    },
    {
        name: "Alyssa P.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        review:
            "Their pruning and stump‑grinding package transformed our overgrown yard into a clean, healthy landscape. The arborists really know what they’re doing—our trees look better than ever!",
    },
];






const Testimonials = () => {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '40px 20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '1200px',
            margin: 'auto',
            textAlign: 'center',
        }}>
            <img
                src={TreeLogo}
                alt="Tree Company Logo"
                style={{ height: '200px', width: 'auto' }}
            />
            <h2 style={{
                textAlign: 'center',
                paddingTop:'2rem',
                color: '#333',
                fontFamily: 'Arial, sans-serif'
            }}>Testimonials</h2>

            <div className="row justify-content-center" style={{ marginTop: '20px' }}>
                {testimonials.map((t, i) => (
                    <div key={i} className="col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
                        <div style={{
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '15px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                        }}>
                            <img
                                src={t.image}
                                alt={`Reviewer ${i + 1}`}
                                style={{ borderRadius: '50%', marginBottom: '10px' }}
                            />
                            <h4 style={{ margin: 0, color: '#007bff' }}>{t.name}</h4>
                            <p style={{ fontSize: '14px', color: '#666' }}>{t.review}</p>
                            <div style={{ color: '#FFD700', fontSize: '18px' }}>★★★★★</div>
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#555', fontSize: '14px' }}>
                <a href="https://g.co/kgs/wK2ycxw" style={{ color: '#007bff', textDecoration: 'none' }}>
                    Read More Reviews on Google
                </a>
            </p>
        </div>
    );
};

export default Testimonials;
