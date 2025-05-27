import React from 'react';
import './Banner.css';

const Banner = ({ image, alt = "Banner" }) => {
    return (
        <div className="custom-banner">
            <img src={image} alt={alt} className="banner-image" />
        </div>
    );
};

export default Banner;
