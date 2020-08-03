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
          height: 56.3vh;
          display: flex;
          align-items: center;
          flex-direction: row;

          background: linear-gradient(180deg, #ffffff 0%, #f6f6f6 100%);
        }
      `}</style>
      <div className="banner_container">
        <Slider {...sliderSetting}>
          {bannerSrc.map((e) => {
            return (
              <div className="banner">
                <Wrapper>
                  <BannerText description={e.description} />
                  <Picture src={e.src} />
                </Wrapper>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
