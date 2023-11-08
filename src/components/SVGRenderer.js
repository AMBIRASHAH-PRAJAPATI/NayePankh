import React from 'react';

function SVGRenderer({ svgCode }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgCode }}
    />
  );
}

export default SVGRenderer;
