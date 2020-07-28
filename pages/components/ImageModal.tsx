import React from "react";
import Modal from "antd/lib/modal/Modal";

interface ImageModalProps {
    photo: string,
    name: string,
    visible: boolean,
    setVisibility: (e) => void,
}

const ImageModal: React.FC<ImageModalProps> = ({photo, name, visible, setVisibility}) => {

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
                src={photo}
                alt={photo}
                style={{ width: "490px"}}
            />
        </Modal>
    )
}

export default ImageModal;
