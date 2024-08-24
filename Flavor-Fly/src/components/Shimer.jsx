import React from 'react';
import './shimer.css';

const Shimer = () => {
    return (
        <div className="shimer-container">
            {[...Array(15)].map((_, index) => (
                <div className="shimer-card" key={index}>
                    <div className="shimmer-image"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                </div>
            ))}
        </div>
    )
}

export default Shimer;