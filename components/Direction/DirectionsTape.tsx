import React from "react";
import Slider from "react-slick";
import { directionSettings, useWindowSize } from "../../services/sliderSetting";
import DirectionCard from "./DirectionCard";
import Wrapper from "../Wrapper";
import theme from "../../styles/theme";

function DirectionsTape({ directions }) {

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
        <h1>НАПРАВЛЕНИЯ СТАЖИРОВОК</h1>
        <Slider {...settings}>
          {directions.map((direction) => {
            return (
              <div
                style={{
                  width:
                    size.width <= "1024" ? 
                    "80vw"
                    :
                    "20%" /*FIXME: Add better solution to improve responsiveness*/,
                }}
              >
                <DirectionCard direction={direction} />
              </div>
            );
          })}
        </Slider>
      </Wrapper>
    </div>
  ) : (
    <div> loading </div>
  );
}

export default DirectionsTape;