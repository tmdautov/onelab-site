import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { toast } from 'react-toastify';

import { sliderSetting } from '../../services/sliderSetting';
import getBanners from '../../services/banner.service';
import BannerContainer from './BannerContainer';
import SkeletonBanner from '../Skeleton/SkeletonBanner';

function Banner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchBanners() {
      setBanners(await getBanners().catch((error) => toast.error(error.message)));
      setLoading(false);
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
        {!loading ? <Slider {...sliderSetting}>
          {banners.map((banner) => {
            return <BannerContainer banner={banner} />;
          })}
        </Slider> : <SkeletonBanner />}
      </div>
    </>
  );
}

export default Banner;
