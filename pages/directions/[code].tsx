import React from "react";
import { useDispatch } from "react-redux";
import {  DirectionItem } from "../../types";
import { addFeatured } from "../../store/actions";
import { Row, } from "antd";
import { products } from "../../services/placeholder";
import Direction from "../../components/Direction";

export default function Products({ product }) {

    const dispatch = useDispatch();

    const onAddFeatured = (product: DirectionItem) => {
        dispatch(addFeatured(product));
    };

    return (
        <Row justify="space-around" align="middle">
            <Direction product={product} onAddFeatured={onAddFeatured}/>
        </Row>
    )
}

Products.getInitialProps = async (ctx) => {

    const code = Number(ctx.query.code);

    const product: DirectionItem = products.find((product) => {
        if (product.code === code)
            return product;
    })

    return {
        product
    }

}
