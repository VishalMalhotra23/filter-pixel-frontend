import "../css/ImageExifData.css";
import React, { useEffect, useState } from "react";

const ImageExifData = ({ exifData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (exifData != null) {
      setData(exifData);
    }
  }, [exifData]);

  return (
    <div className="exifdata">
      <div className="dataheader">
        <h1 className="dataheaderheading"> About Image </h1>
      </div>
      <div className="data">
        <div className="datarow">
          <h1 className="key">Lens </h1>
          <h1 className="value">{data?.lens || ""} </h1>
        </div>

        <div className="datarow">
          <h1 className="key">CaptureTime </h1>
          <h1 className="value">{data?.captureTime?.rawValue || ""} </h1>
        </div>

        <div className="datarow">
          <h1 className="key">ISO </h1>
          <h1 className="value">{data?.iso || ""} </h1>
        </div>

        <div className="datarow">
          <h1 className="key">Speed </h1>
          <h1 className="value">{data?.speed || ""} </h1>
        </div>

        <div className="datarow">
          <h1 className="key">Aperture </h1>
          <h1 className="value">{data?.aperture || ""}</h1>
        </div>

        <div className="datarow">
          <h1 className="key">FileName </h1>
          <h1 className="value">{data?.filename || ""} </h1>
        </div>

        <div className="datarow">
          <h1 className="key">ImageSize </h1>
          <h1 className="value">{data?.imagesize || ""} </h1>
        </div>

        <div className="datarow">
          <h1 className="key">WhiteBalance </h1>
          <h1 className="value">{data?.whitebalance || ""} </h1>
        </div>

        <div className="datarow">
          <h1 className="key">Rating </h1>
          <h1 className="value">
            {data?.filename
              ? data?.rating !== undefined
                ? data.rating
                : "0"
              : " "}{" "}
          </h1>
        </div>

        <div className="datarow">
          <h1 className="key">Camera </h1>
          <h1 className="value">{data?.camera || ""} </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageExifData;
