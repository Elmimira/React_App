import React from 'react';

function Card({ imageSrc, description }) {
return (
    <div className="card">
    <img src={imageSrc} alt={description="Оdescription in progress..."} />
    <p>{description}</p>
    </div>
);
}

export default Card;
