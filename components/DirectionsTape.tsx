import React from "react";
import Slider from "react-slick";
import { directionsSetting } from "../services/sliderSetting";
import DirectionCard from "./DirectionCard";
import Wrapper from "./Wrapper";
import theme from "../styles/theme";

function DirectionsTape({ directions }) {
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
            font-weight: 800;
            font-size: 2.375vw;
            margin-bottom: 9.55vh;
          }
        `}
      </style>
      <Wrapper>
        <h1>Направления стажировок</h1>
        <Slider {...directionsSetting}>
          {directions.map((direction) => {
            return (
              <div
                style={{
                  width:
                    "16.666%" /*FIXME: Add better solution to improve responsiveness*/,
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
