import "./App.css";
import React, { useEffect, useState } from "react";
import ImageDisplay from "./components/ImageDisplay";
import ImageExifData from "./components/ImageExifData";
import { API } from "./backend";

const App = () => {
  const [imagesData, setImagesData] = useState([]);
  const [exifData, setExifData] = useState();
  const [selectedImage, setSelectedImage] = useState(-1);

  useEffect(() => {
    fetch(`${API}/getimages`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setImagesData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching image data:", error.message);
      });

    fetchExifData();
  }, []);

  const fetchExifData = () => {
    fetch(`${API}/getimagesdata`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setExifData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching additional data:", error.message);
      });
  };

  const selectImage = async (index) => {
    await setSelectedImage(index);
  };

  return (
    <div className="main">
      <div className="header">
        <h1 className="headertext">Welcome User</h1>
      </div>

      <div className="infoSection">
        <div className="imageDisplay">
          {selectedImage >= 0 ? (
            <ImageDisplay
              imageData={imagesData[selectedImage]}
              display={true}
            />
          ) : (
            ""
          )}
        </div>

        <div className="infoDisplay">
          {selectedImage >= 0 ? (
            <ImageExifData exifData={exifData[selectedImage]} />
          ) : (
            <ImageExifData exifData={null} />
          )}
        </div>
      </div>

      <div className="imageSelection">
        <div className="imageselectedheader">
          <h1 className="selectedimagetitle">
            {selectedImage >= 0
              ? exifData[selectedImage].filename
              : "Select Your File"}
          </h1>
        </div>
        <div className="image-container">
          {imagesData.length > 0
            ? imagesData.map((imageData, index) => (
                <div
                  className={`image ${
                    index === selectedImage ? "selected" : ""
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <ImageDisplay imageData={imageData} display={false} />
                </div>
              ))
            : " "}
        </div>
      </div>
    </div>
  );
};

export default App;
