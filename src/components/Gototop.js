import React from 'react';

function Gototop() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonStyle = {
        position: 'fixed',
        width: '50px',
        height: '50px',
        bottom: '50px',
        left: '50px',
        backgroundColor: '#ff6a00c6',
        color:'white',
        border: 'none',
        borderRadius: '50%',
    };

    return (
        <button id="goToTopButton" onClick={handleClick} style={buttonStyle}>
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}

export default Gototop;
