import React from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addFeatured } from "../../store/actions";
import { FeaturedState, ProductItem } from "../../types";
import ProductTape from "./ProductTape";

const ProductPage = () => {

    const featured = useSelector<FeaturedState, FeaturedState["featured"]>(
        (state) => state.featured
    );

    const catalog = useSelector<FeaturedState, FeaturedState["catalog"]>(
        (state) => state.catalog
    );

    return (
        <Row justify="space-around" align="middle">
            <Col span={20}>
                <ProductTape catalog={catalog}/>
            </Col>
            <ul>
                {featured.map((line) => {
                    return <li>{line.product.name}</li>
                })}
            </ul>
        </Row>
    )
}

export default ProductPage;
