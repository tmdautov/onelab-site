import React from "react";
import Modal from "antd/lib/modal/Modal";
import ImageContainer from "./ImageContainer";

interface ImageModalProps {
    photo: string,
    photos: string[],
    name: string,
    visible: boolean,
    setVisibility: (e) => void,
}

const ImageModal: React.FC<ImageModalProps> = ({photo, photos, name, visible, setVisibility}) => {

    const [selectedPhoto, setSelectedPhoto] = React.useState("");

    React.useEffect(() => {
        setSelectedPhoto(photo);
    }, [photo]);

    return (
        <Modal
            title={name}
            visible={visible}
            onOk={(e) => {
                setVisibility(false);
            }}
            onCancel={(e) => {
                setVisibility(false);
            }}
        >
            <img
                src={selectedPhoto}
                alt={selectedPhoto}
                style={{ width: "490px"}}
            />
            <ImageContainer photos={photos} setSelectedPhoto={setSelectedPhoto} />
        </Modal>
    )
}

export default ImageModal;
