import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';

import { sliderSetting } from '../../services/sliderSetting';
import getBanners from '../../services/banner.service';
import BannerContainer from './BannerContainer';

function Banner() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    async function fetchBanners() {
      setBanners(await getBanners().catch((error) => toast.error(error.message)));
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
            margin-top: 10vh;
          }
        }
      `}</style>
      <div className="banner_container">
        {banners.length ? (
          <Slider {...sliderSetting}>
            {banners.map((banner) => {
              return <BannerContainer banner={banner} />;
            })}
          </Slider>
        ) : (
          <Skeleton width="100vw" height="44.44vh" />
        )}
      </div>
    </>
  );
}

export default Banner;
