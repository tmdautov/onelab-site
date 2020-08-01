import React from "react";
import Picture from "./Picture";
import BannerText from "./BannerText";
import Slider from "react-slick";
import { sliderSetting } from "../../services/sliderSetting";
import { bannerSrc } from "../../services/bannerSrc";

const Banner = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <>
            <style jsx>
                {`
                    .ant-carousel .slick-slide {
                        text-align: center;
                        height: 160px;
                        line-height: 160px;
                        background: #364d79;
                        overflow: hidden;
                      }
                      
                      .ant-carousel .slick-slide .slick-content {
                        color: #000;
                      }

                      .carousel-holder {
                        background: linear-gradient(180deg, #FFFFFF 0%, #F6F6F6 100%); 
                        height: 425px;
                        width: 100%;
                      }

                      .grayscale { filter: grayscale(100%); }
                `}
            </style>
            <div className="carousel-holder">
                <Slider {...sliderSetting}>
                  {bannerSrc.map(e => {
                    return (
                      <div>
                        <div>
                          <BannerText description={e.description}/>
                          <Picture src={e.src} paddingRight={e.paddingRight} paddingBottom={e.paddingBottom} />
                        </div>
                      </div>  
                    )
                  })}
                </Slider>
            </div>
        </>
    )
}

export default Banner;
