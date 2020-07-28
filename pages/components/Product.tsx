import React from "react";
import ImageContainer from "./ImageContainer";
import ImageModal from "./ImageModal";

const Product = () => {

    const [photos, setPhotos] = React.useState([]);
    React.useEffect(() => {
        const urls = [
            "https://cdn-1.dar.kz/darbiz/catalogs/f71/7880bf00-f716-11e9-9368-0a580a0204b9-L.webp",
            "https://cdn-1.dar.kz/darbiz/catalogs/f71/7afbf83b-f716-11e9-9163-0a580a0203c3-L.webp",
            "https://cdn-1.dar.kz/darbiz/catalogs/f71/7b0a96bf-f716-11e9-9163-0a580a0203c3-L.webp",
            "https://cdn-1.dar.kz/darbiz/catalogs/f71/7b1d4aab-f716-11e9-9163-0a580a0203c3-L.webp",
        ];
        setPhotos(urls);
    }, []);

    const [selectedPhoto, setSelectedPhoto] = React.useState("");
    const [visibility, setVisibility] = React.useState(false);

    React.useEffect(() => {
        setSelectedPhoto(photos[0]);
    }, [photos]);

    return (
        <div className="Product" style={{ display: "flex", flexDirection: "column" }}>
            <img src={selectedPhoto} alt={selectedPhoto} style={{ width: "250px" }} onClick={() => setVisibility(true)}/>
            <label>Нажмите на изображение, чтобы увеличить</label>
            <ImageContainer
                photos={photos}
                setSelectedPhoto={setSelectedPhoto}
            />
            <ImageModal visible={visibility} photo={selectedPhoto} name={selectedPhoto} setVisibility={setVisibility}/>
        </div>
    )
}

export default Product;
