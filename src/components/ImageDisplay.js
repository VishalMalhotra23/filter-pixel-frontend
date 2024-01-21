import React, { useState, useEffect } from "react";

const ImageDisplay = ({ imageData, display }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [displayOnBanner, setDisplayOnBanner] = useState(false);

  useEffect(() => {
    setImageSrc(`data:image/jpeg;base64,${imageData}`);
    setDisplayOnBanner(display);
  }, [imageData]);

  return displayOnBanner ? (
    <div
      style={{
        padding: " 3rem 5rem 2rem 5rem",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        className="image"
        src={imageSrc}
        alt="img"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  ) : (
    <img
      className="image"
      src={imageSrc}
      alt="img"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export default ImageDisplay;
