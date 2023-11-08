import React from 'react';
import PhotoAlbum from "react-photo-album";
import img1 from "./items/img5.webp";
import img2 from "./items/img2.webp";
import img3 from "./items/img7.webp";
import img4 from "./items/img1.webp";
import img5 from "./items/img9.webp";
import img6 from "./items/img10.webp";
import img7 from "./items/img11.webp";
import img8 from "./items/img12.webp";
import img9 from "./items/img13.webp";
import img10 from "./items/img14.jpg";
import img11 from "./items/img15.jpg";
import img13 from "./items/img3.webp";
import img14 from "./items/img6.jpg";

const photos = [
    {
        src: img1,
        width: 400,
        height: 200,
        srcSet: [
            { src: img1, width: 350, height: 200 },
            { src: img1, width: 200, height: 100 },
        ],
    },
    {
        src: img2,
        width: 200,
        height: 400,
        srcSet: [
            { src: img2, width: 400, height: 450 },
            { src: img2, width: 300, height: 225 },
        ],
    },
    {
        src: img3,
        width: 600,
        height: 300,
        srcSet: [
            { src: img3, width: 500, height: 330 },
            { src: img3, width: 300, height: 170 },
        ],
    },
    {
        src: img4,
        width: 500,
        height: 300,
        srcSet: [
            { src: img4, width: 800, height: 450 },
            { src: img4, width: 400, height: 225 },
        ],
    },
    {
        src: img5,
        width: 400,
        height: 600,
        srcSet: [
            { src: img5, width: 300, height: 390 },
            { src: img5, width: 200, height: 250 },
        ],
    },
    {
        src: img6,
        width: 400,
        height: 600,
        srcSet: [
            { src: img6, width: 400, height: 450 },
            { src: img6, width: 200, height: 225 },
        ],
    },
    {
        src: img7,
        width: 400,
        height: 600,
        srcSet: [
            { src: img7, width: 300, height: 350 },
            { src: img7, width: 200, height: 250 },
        ],
    },
    {
        src: img8,
        width: 500,
        height: 600,
        srcSet: [
            { src: img8, width: 800, height: 450 },
            { src: img8, width: 400, height: 225 },
        ],
    },
    {
        src: img9,
        width: 600,
        height: 600,
        srcSet: [
            { src: img9, width: 400, height: 300 },
            { src: img9, width: 200, height: 150 },
        ],
    },
    {
        src: img11,
        width: 500,
        height: 600,
        srcSet: [
            { src: img11, width: 400, height: 300 },
            { src: img11, width: 200, height: 150 },
        ],
    },
    {
        src: img10,
        width: 900,
        height: 600,
        srcSet: [
            { src: img10, width: 800, height: 450 },
            { src: img10, width: 400, height: 225 },
        ],
    },
    {
        src: img13,
        width: 800,
        height: 600,
        srcSet: [
            { src: img13, width: 400, height: 300 },
            { src: img13, width: 200, height: 150 },
        ],
    },
    {
        src: img14,
        width: 1600,
        height: 900,
        srcSet: [
            { src: img14, width: 800, height: 450 },
            { src: img14, width: 400, height: 225 },
        ],
    },
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}
