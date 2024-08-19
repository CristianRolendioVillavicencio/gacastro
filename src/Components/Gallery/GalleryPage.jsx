import React, { useState } from "react";
import { Gallery } from "react-grid-gallery"; // Asegúrate de que el paquete está instalado
import Lightbox from "react-image-lightbox"; // Asegúrate de que el paquete está instalado
import "react-image-lightbox/style.css"; // Asegúrate de que el paquete está instalado y la ruta es correcta
import { images } from "./images.ts"; // Ajusta la ruta si es necesario y asegúrate de que el archivo existe

export default function   GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [filter, setFilter] = useState("all");
  const [hoveredButton, setHoveredButton] = useState(null); // Estado para manejar el hover

  const filteredImages = filter === "all" ? images : images.filter(image => image.service === filter);

  const currentImage = filteredImages[currentIndex];
  const nextIndex = (currentIndex + 1) % filteredImages.length;
  const nextImage = filteredImages[nextIndex] || currentImage;
  const prevIndex = (currentIndex + filteredImages.length - 1) % filteredImages.length;
  const prevImage = filteredImages[prevIndex] || currentImage;

  const handleClick = (index) => setCurrentIndex(index);
  const handleClose = () => setCurrentIndex(-1);
  const handleMovePrev = () => setCurrentIndex(prevIndex);
  const handleMoveNext = () => setCurrentIndex(nextIndex);

  const buttonStyle = {
    backgroundColor: "#FAA819",  // Color rojo inicial
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#000000",  // Color rojo marrón para el hover
    color: "white",
  };

  const getButtonStyle = (button) => hoveredButton === button ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          type="button"
          style={getButtonStyle("all")}
          onMouseEnter={() => setHoveredButton("all")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          style={getButtonStyle("painting")}
          onMouseEnter={() => setHoveredButton("painting")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setFilter("painting")}
        >
          Painting
        </button>
        <button
          type="button"
          style={getButtonStyle("carpentry")}
          onMouseEnter={() => setHoveredButton("carpentry")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setFilter("carpentry")}
        >
          Carpentry
        </button>
        <button
          type="button"
          style={getButtonStyle("drywall")}
          onMouseEnter={() => setHoveredButton("drywall")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setFilter("drywall")}
        >
          Drywall
        </button>
      </div>
      <Gallery
        images={filteredImages}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
