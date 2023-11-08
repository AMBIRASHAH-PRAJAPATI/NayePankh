import React from 'react';

function BlobSVG() {
  return (
    <svg id="sw-js-blob-svg" viewBox=" -10 0 170 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 0.83)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(251, 168, 31, 0.86)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M24,-27.2C30.7,-22.9,35.6,-15,35.9,-7.2C36.2,0.5,31.8,8.2,27,14.6C22.1,21.1,16.8,26.3,10.3,29C3.8,31.7,-3.9,31.9,-12.6,30.5C-21.2,29.1,-30.7,26.1,-35.3,19.7C-40,13.2,-39.7,3.1,-37.4,-6C-35.1,-15.1,-30.7,-23.2,-24.1,-27.6C-17.5,-31.9,-8.7,-32.6,-0.1,-32.5C8.6,-32.4,17.2,-31.6,24,-27.2Z"
        width="50%"
        height="50%"
        transform="translate(50 40)"
        strokeWidth="0"
        style={{ transition: 'all 0.3s ease 0s' }}
      ></path>
    </svg>
  );
}

export default BlobSVG;
