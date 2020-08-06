import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { sliderSetting } from "../../services/sliderSetting";
import getBanners from "../../services/banner.service";
import BannerContainer from "./BannerContainer";

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
        @media (max-width: 1024px) {
          .banner_container {
            margin-top: 15vh;
          }
        }
      `}</style>
      <div className="banner_container">
        <Slider {...sliderSetting}>
          {banners.map((banner) => {
            return <BannerContainer banner={banner} />;
          })}
        </Slider>
      </div>
    </>
  );
}

export default Banner;
