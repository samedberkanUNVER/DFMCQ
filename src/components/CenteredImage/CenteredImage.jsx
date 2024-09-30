import React from 'react';
import './CenteredImage.css';

const CenteredImage = ({ src, alt }) => {
    return (
        <div className="centered-image-container">
            <img src={src} alt={alt} className="centered-image" />
        </div>
    );
};

export default CenteredImage;
