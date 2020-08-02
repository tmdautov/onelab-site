import React from "react";
import { ProductItem } from "../types";
import { products } from "../services/placeholder";
import { Row, Col } from "antd";
import ImageSection from "./ImageSection";
import ProductPanel from "./ProductPanel";

interface ProductProps {
    product: ProductItem;
    onAddFeatured: (ProductItem) => void;
}

const Product: React.FC<ProductProps> = ({product, onAddFeatured}) => {
    
    const [photos, setPhotos] = React.useState([]);
    React.useEffect(() => {
        setPhotos(product.image);
    }, [photos]);

    return (
        <Row gutter={[16, 8]}>
            <Col span={12}>
                <ImageSection photos={photos} />
            </Col>
            <Col span={12}>
                <ProductPanel product={product} onAddFeatured={onAddFeatured} />
            </Col>
        </Row>
    )

}

export default Product;