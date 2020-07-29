import React from "react";
import ImageContainer from "./ImageContainer";
import ImageModal from "./ImageModal";

interface ImageSectionProps {
    photos: string[];
}

const ImageSection: React.FC<ImageSectionProps> = ({photos}) => {
    
    const [selectedPhoto, setSelectedPhoto] = React.useState("");
    
    const [visibility, setVisibility] = React.useState(false);

    React.useEffect(() => {
        setSelectedPhoto(photos[0]);
    }, [photos]);
    return (
        <div className="image-holder" style={{ display: "flex", flexDirection: "column" }}>
            <img src={selectedPhoto} alt={selectedPhoto} style={{ width: "250px" }} onClick={() => setVisibility(true)} />
            <label>Нажмите на изображение, чтобы увеличить</label>
            <ImageContainer
                photos={photos}
                setSelectedPhoto={setSelectedPhoto}
            />
            <ImageModal
                visible={visibility}
                photo={selectedPhoto}
                name={selectedPhoto}
                setVisibility={setVisibility}
                photos={photos}
            />
        </div>
    )
}

export default ImageSection;
