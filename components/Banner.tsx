import React, { useEffect, useState } from "react";
import Picture from "./Picture";
import BannerText from "./BannerText";
import Slider from "react-slick";
import { sliderSetting } from "../services/sliderSetting";
import Wrapper from "./Wrapper";
import getBanners from "../services/banner.service";

function Banner() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    async function fetchBanners() {
      setBanners(await getBanners());
    }
    fetchBanners();
  }, []);
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

        @media (max-width: 1000px) {
          .banner_container {
            padding-top: 10%;
          }
        }
      `}</style>
      <div className="banner_container">
        <Slider {...sliderSetting}>
          {banners.map((banner) => {
            return (
              <div className="banner">
                <Wrapper>
                  <div className="banner_flex">
                    <BannerText
                      title={banner.title}
                      description={banner.description}
                      url={banner.url}
                      buttonText={banner.buttonText}
                    />
                    <Picture imgUrl={banner.img} />
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
