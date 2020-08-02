import React from "react";
import Picture from "./Picture";
import BannerText from "./BannerText";
import Slider from "react-slick";
import { sliderSetting } from "../services/sliderSetting";
import { bannerSrc } from "../services/bannerSrc";
import Wrapper from "./Wrapper";

const Banner = () => {
  return (
    <>
      <style jsx>{`
        .banner_container {
        }
        .banner {
          width: 100%;
          height: 425px; //FIXME: px to vh
          display: flex;
          align-items: center;

          background: linear-gradient(180deg, #ffffff 0%, #f6f6f6 100%);
        }
      `}</style>
      <Slider {...sliderSetting} className="banner_container">
        {bannerSrc.map((e) => {
          return (
            <div className="banner">
              <Wrapper>
                
              </Wrapper>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Banner;
