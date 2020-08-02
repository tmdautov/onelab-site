import React from "react";
import { Card, List, Button } from "antd";
import Link from "next/link";
import { ProductItem } from "../types";

interface ProductTapeProps {
  catalog: ProductItem[];
}

const { Meta } = Card;

const ProductTape: React.FC<ProductTapeProps> = (props) => {
  return props.catalog !== undefined ? (
    <div>
      <style jsx>
        {`
                    h1 {
                        font-weight: 800;
                        font-size: 2.375rem;
                    }
                    
                    .ant-list-pagination {
                        position: absolute,
                        bottom: 40vh,
                    }
                    
                `}
      </style>
      <List
        header={<h1>Направления стажировок</h1>}
        pagination={{
          pageSize: 3,
          style: {
            position: "absolute",
            bottom: "87%",
            right: "2.6vh",
          },
        }}
        grid={{ gutter: 16, column: 3 }}
        dataSource={props.catalog}
        renderItem={(product) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: "90%", justifyContent: "center" }}
              title={<h3 style={{ margin: "0 22%" }}>{product.name}</h3>}
              cover={
                <span
                  style={{
                    margin: "2.1vh 2.9vw",
                    width: "75%",
                    color: "#1A1A1A",
                  }}
                >
                  {product.briefDescription}
                </span>
              }
            >
              <Meta
                style={{ margin: "0 1.6vw" }}
                description={
                  <>
                    <Link
                      href={`/products/[code]`}
                      as={`/products/${product.code}`}
                    >
                      <Button style={{ width: "45%" }}>Подробнее</Button>
                    </Link>
                    <Button
                      type="primary"
                      style={{ width: "45%", float: "right" }}
                    >
                      Участвовать
                    </Button>
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  ) : (
    <div> loading </div>
  );
};

export default ProductTape;
