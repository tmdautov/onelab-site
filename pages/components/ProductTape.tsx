import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { ProductItem } from "../../types";

interface ProductTapeProps {
    catalog: ProductItem[];
}

const { Meta } = Card;

const ProductTape: React.FC<ProductTapeProps> = (props) => {
    return (props.catalog !== undefined) ? (
        <div>
            {props.catalog.map((product) => {
                return (
                    <Link href={`/products/[code]`} as={`/products/${product.code}`}>
                        <Card
                            hoverable
                            style={{ width: "240px" }}
                            cover={<img alt={product.image[0]} src={product.image[0]} />}
                        >
                            <Meta title={product.name} description={<h3>{product.price} т</h3>} />
                        </Card>
                    </Link>
                )
            })}
        </div>
    ) : <div> loading </div>
}

export default ProductTape;
