import React from 'react';

import Direction from '../../components/Direction/Direction';
import { getDirection } from '../../services/directions.service';

export default function Directions({ direction }) {
  return <Direction direction={direction} />;
}

Directions.getInitialProps = async (ctx) => {
  const direction = await getDirection(ctx.query.id);

  return {
    direction,
  };
};
