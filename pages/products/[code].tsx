import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { FeaturedState, ProductItem } from "../../types";
import { addFeatured } from "../../store/actions";
import { Row, Col, Button } from "antd";
import ImageContainer from "../../components/ImageContainer";
import ImageModal from "../../components/ImageModal";
import { products } from "../../services/placeholder";
import Product from "../../components/Product";

export default function Products({ product }) {

    const dispatch = useDispatch();

    const onAddFeatured = (product: ProductItem) => {
        dispatch(addFeatured(product));
    };

    return (
        <Row justify="space-around" align="middle">
            <Product product={product} onAddFeatured={onAddFeatured}/>
        </Row>
    )
}

Products.getInitialProps = async (ctx) => {

    const code = Number(ctx.query.code);

    const product: ProductItem = products.find((product) => {
        if (product.code === code)
            return product;
    })

    return {
        product
    }

}
