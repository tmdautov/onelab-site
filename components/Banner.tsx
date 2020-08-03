import React from "react";
import Picture from "./Picture";
import BannerText from "./BannerText";
import Slider from "react-slick";
import { sliderSetting } from "../services/sliderSetting";
import { bannerSrc } from "../services/bannerSrc";
import Wrapper from "./Wrapper";

function Banner() {
  return (
    <>
      <style jsx>{`
        .banner_container {
          width: 100%;
        }
        .banner {
          height: 425px; //FIXME: px to vh
          width: 100%;

          background: linear-gradient(180deg, #ffffff 0%, #f6f6f6 100%);

          box-sizing: border-box;
          padding-top: 48px; //FIXME: px to vh
        }
        .banner_flex {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
      <div className="banner_container">
        <Slider {...sliderSetting}>
          {bannerSrc.map((e) => {
            return (
              <div className="banner">
                <Wrapper>
                  <div className="banner_flex">
                    <BannerText
                      title={e.title}
                      description={e.description}
                      url={e.src}
                    />
                    <Picture imgUrl={e.src} />
                  </div>
                </Wrapper>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Banner;
