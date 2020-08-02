import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { FeaturedState } from "../types";
import ProductTape from "./ProductTape";

const ProductPage = () => {

    const featured = useSelector<FeaturedState, FeaturedState["featured"]>(
        (state) => state.featured
    );

    const catalog = useSelector<FeaturedState, FeaturedState["catalog"]>(
        (state) => state.catalog
    );

    return (
        <>
            <div>
                <ProductTape catalog={catalog}/>
            </div>
            <Row justify="space-around" align="middle">
                <Col span={20}>
                    <ul>
                        {featured.map((line) => {
                            return <li>{line.product.name}</li>
                        })}
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default ProductPage;
