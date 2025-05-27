import React from 'react';
import Image from '../images/treecut2.jpg';
import Image2 from '../images/TreeCo4.jpg';
import Image3 from '../images/TreeAboutUs.jpg'

const AboutSection = () => {
    return (
        <section id="about" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-5 col-sm-6">
                        <div className="about-info">
                            <div className="section-title">
                                <h2>We'll make sure your pool is healthy and clean</h2>
                                <span className="line-bar">...</span>
                            </div>
                            <h1>Rated The best Tree Service in the state of Texas!</h1>
                            <blockquote style={{color:'black'}}>"Tree, Removal, Tree Maintenance, Tree Equipment Repair, whatever the tree problem we provide
                                the tree solution."</blockquote>

                                               </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="about-info skill-thumb" style={{ textAlign: 'center' }}>
                            <img
                                src={Image2}
                                className="img-responsive"
                                style={{ maxWidth: '100%', height: 'auto' }}
                                alt="Pool Cleaning Clipart"
                            />
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="about-image">
                            <img
                                className="img-responsive"
                                src={Image}
                                style={{ maxWidth: '100%', height: 'auto' }}
                                className="img-responsive"
                                alt="Painting Animation"
                            />
                            <span><h2 style={{color:'black', textAlign:'center',paddingTop:'1rem'}}>"The absolute best when it comes to Tree Care"</h2></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
