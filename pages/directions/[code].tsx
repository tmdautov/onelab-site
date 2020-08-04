import React from "react";
import Direction from "../../components/Direction";
import { directions } from "../../services/placeholder";

export default function Products({ product }) {
  return <Direction product={product} />;
}

Products.getInitialProps = async (ctx) => {
  const code = Number(ctx.query.code);

  const product = directions.find((product) => {
    if (product.code === code) return product;
  });

  return {
    product,
  };
};
