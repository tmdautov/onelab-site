import React from "react";
import Direction from "../../components/Direction";
import { directions } from "../../services/placeholder";

export default function Directions({ direction }) {
  return <Direction direction={direction} />;
}

Directions.getInitialProps = async (ctx) => {
  const id = Number(ctx.query.id);

  const direction = directions.find((direction) => {
    if (direction._id === id) return direction;
  });

  return {
    direction,
  };
};
