import React from "react";
import { Row, Col } from "antd";
import Product from "./components/Product";

const ProductPage = () => {
    return (
        <Row justify="space-around" align="middle">
            <Col span={20}>
                <Product />
            </Col>
        </Row>
    )
}

export default ProductPage;
