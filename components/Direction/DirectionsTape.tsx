import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import { directionSettings, useWindowSize } from '../../services/sliderSetting';
import DirectionCard from './DirectionCard';
import Wrapper from '../Wrapper';
import theme from '../../styles/theme';
import Skeleton from 'react-loading-skeleton';
import SkeletonDirections from '../Skeleton/Directions/SkeletonDirections';

function DirectionsTape({ directions }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setCards(directions);
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timing);
  }, []);

  const settings = directionSettings();
  const size = useWindowSize();
  return directions !== undefined ? (
    <div className="directions-container">
      <style jsx>
        {`
          .directions-container {
            padding-top: 9.55vh;
            width: 100%;
            background: ${theme.colors.white};
          }
          h1 {
            font-size: 2.375rem;
            margin-bottom: 9.55vh;
          }

          @media screen only and (max-width: 1024px) {
            .directions-container {
              text-align: center;
            }
          }
        `}
      </style>
      <Wrapper>
        {!loading ? 
        <h1>НАПРАВЛЕНИЯ СТАЖИРОВОК</h1>
          :
        <h1>
          <Skeleton width={300} />
        </h1>
        }
        <Slider {...settings}>
          {!loading ? cards.map((direction) => {
            return (
              <div
                style={{
                  width: size.width <= '1024' ? '80vw' : (100 / directions.length).toString() + "%",
                  maxWidth: "50%",
                }}>
                <DirectionCard direction={direction} />
              </div>
            );
          }) : 
            directions.map(() => 
              <SkeletonDirections />
            )
          }
        </Slider>
      </Wrapper>
    </div>
  ) : (
    <div> loading </div>
  );
}

export default DirectionsTape;
