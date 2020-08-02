import React from "react";

interface ImageContainerProps {
  photos: string[];
  setSelectedPhoto: (e) => void;
}

const ImageContainer: React.FC<ImageContainerProps> = (props) => {
  return props.photos !== undefined ? (
    <div className="container">
      {props.photos.map((e) => {
        return (
          <span
            onClick={() => {
              props.setSelectedPhoto(e);
            }}
          >
            <img
              src={e}
              alt={e}
              style={{
                width: "100px",
                border: "1px solid rgba(61,87,95,0.6)",
                marginRight: "4px",
                cursor: "pointer",
              }}
            />
          </span>
        );
      })}
    </div>
  ) : (
    <div> loading</div>
  );
};

export default ImageContainer;
