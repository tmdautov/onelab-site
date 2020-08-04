import React from "react";
import Direction from "../../components/Direction";
import { directions } from "../../services/placeholder";

export default function Directions({ direction }) {
  return <Direction direction={direction} />;
}

Directions.getInitialProps = async (ctx) => {
  const code = Number(ctx.query.code);

  const direction = directions.find((direction) => {
    if (direction.code === code) return direction;
  });

  return {
    direction,
  };
};
