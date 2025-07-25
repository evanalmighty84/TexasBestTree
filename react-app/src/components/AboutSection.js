import React from 'react';
import Image from '../images/treecut2.jpg';
import Image2 from '../images/TreeCo4.jpg';
import Image3 from '../images/TreeAboutUs.jpg'

const AboutSection = () => {
    return (
        <section id="about" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row text-center align-items-center">

                    {/* Left Image */}
                    <div className="col-md-4 col-sm-12">
                        <div className="about-image">
                            <img
                                src={Image}
                                className="img-responsive"
                                style={{ maxWidth: '100%', height: 'auto' }}
                                alt="Tree Removal Picture"
                            />
                        </div>
                    </div>

                    {/* Center Text */}
                    <div className="col-md-4 col-sm-12">
                        <div className="about-info px-3">

                            <h1>The absolute best when it comes to Tree Care</h1>
                            <blockquote style={{ color: 'black', fontStyle: 'italic' }}>
                                "Whatever the Tree problem, we provide the tree solution."
                            </blockquote>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-md-4 col-sm-12">
                        <div className="about-image">
                            <img
                                src={Image2}
                                className="img-responsive"
                                style={{ maxWidth: '100%', height: 'auto' }}
                                alt="Tree Removal Picture"
                            />
                        </div>
                    </div>

                </div>


            </div>

        </section>
    );
};

export default AboutSection;
