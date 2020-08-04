import React from "react";
import { Card, List, Button } from "antd";
import Link from "next/link";
import { ProductItem } from "../types";
import Slider from "react-slick";
import { directionsSetting } from "../services/sliderSetting";
import DirectionCard from "./DirectionCard";
import Wrapper from "./Wrapper";
import theme from "../styles/theme";

interface ProductTapeProps {
  catalog: ProductItem[];
}

const { Meta } = Card;

const DirectionsTape: React.FC<ProductTapeProps> = (props) => {
  return props.catalog !== undefined ? (
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
          {props.catalog.map(e => {
            return (
              <div style={{ width: "16.666%" /*FIXME: Add better solution to improve responsiveness*/, }}>
                <DirectionCard product={e} />
              </div>
            )
          })}
        </Slider>
      </Wrapper>
    </div>
  ) : (
      <div> loading </div>
    );
};

export default DirectionsTape;
