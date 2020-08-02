import React from "react";
import { Card, List, Button } from "antd";
import Link from "next/link";
import { ProductItem } from "../types";

interface ProductTapeProps {
    catalog: ProductItem[];
}

const { Meta } = Card;

const ProductTape: React.FC<ProductTapeProps> = (props) => {
    return (props.catalog !== undefined) ? (
        <div>
            <List
                header={<h1>Направления стажировок</h1>}
                grid={{ gutter: 12, column: 3 }}
                dataSource={props.catalog}
                renderItem={product => (
                    <List.Item>
                            <Card
                                hoverable
                                style={{width: "90%", justifyContent: "center"}}
                                title={<h3 style={{margin: "0 15px"}}>{product.name}</h3>}
                                cover={<span style={{margin: "20px 45px", width: "75%", color: "#1A1A1A"}}>{product.briefDescription}</span>}
                            >
                                <Meta style={{margin: "0 20px"}}
                                    description={
                                            <>
                                                <Link href={`/products/[code]`} as={`/products/${product.code}`}>
                                                    <Button style={{width: "116px"}}>Подробнее</Button>
                                                </Link>
                                                <Button type="primary" style={{width: "140px", float: "right"}}>Участвовать</Button>
                                            </>
                                        } 
                                />
                            </Card>
                    </List.Item>
                )}
            />
        </div>
    ) : <div> loading </div>
}

export default ProductTape;
