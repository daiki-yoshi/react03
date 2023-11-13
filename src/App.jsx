import React, { useState } from "react";

export default function App() {
  const images = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" }
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isDarkened, setIsDarkened] = useState(false);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleDarkenToggle = () => {
    setIsDarkened(!isDarkened);
  };

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
        <div className={`overlay ${isDarkened ? 'dark-overlay' : ''}`}>
        <button className="dark" onClick={handleDarkenToggle}>
          {isDarkened ? "Lighten" : "Darken"}
        </button>
        </div>
      </div>
      <div className="thumb-bar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="thumbnail-img"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </>
  );
}
