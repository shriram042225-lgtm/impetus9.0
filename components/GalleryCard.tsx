import React from "react";

const images: string[] = [
    "/images/gallery/imag32.JPG",
    "/images/gallery/imag35.jpg",
    "/images/gallery/imag36.jpg",
    "/images/gallery/imag37.jpg",
    "/images/gallery/imag38.jpg",
    "/images/gallery/imag20.jpg",
    "/images/gallery/imag21.jpg",
    "/images/gallery/imag8.jpg",
    "/images/gallery/imag9.jpg",
    "/images/gallery/imag1.webp",
    "/images/gallery/imag2.webp",
    "/images/gallery/imag3.webp",
    "/images/gallery/imag4.webp",
    "/images/gallery/imag5.jpg",
    "/images/gallery/imag33.jpg",
    "/images/gallery/imag6.webp",
    "/images/gallery/imag7.webp",
    "/images/gallery/imag10.webp",
    "/images/gallery/imag11.webp",
    "/images/gallery/imag12.webp",
    "/images/gallery/imag13.jpg",
    "/images/gallery/imag14.jpg",
    "/images/gallery/imag15.jpg",
    "/images/gallery/imag16.webp",
    "/images/gallery/imag17.webp",
    "/images/gallery/imag18.webp",
    "/images/gallery/imag19.webp",
    "/images/gallery/imag22.webp",
    "/images/gallery/imag23.webp",
    "/images/gallery/imag24.webp",
    "/images/gallery/imag25.webp",
    "/images/gallery/imag26.webp",
    "/images/gallery/imag27.webp",
    "/images/gallery/imag28.webp",
    "/images/gallery/imag29.webp",
    "/images/gallery/imag30.webp",
    "/images/gallery/imag31.webp",
];


export default function GalleryCard() {
    return (
        <div className="pt-28 px-6 max-w-7xl mx-auto">
            <p className="text-center text-2xl md:text-3xl text-gray-400 mb-12 relative z-10">
                Explore our collection of moments and creations
            </p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-2xl shadow-md group"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}