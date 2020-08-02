import React from "react";
import Picture from "./Picture";
import BannerText from "./BannerText";
import Slider from "react-slick";
import { sliderSetting } from "../../services/sliderSetting";
import { bannerSrc } from "../../services/bannerSrc";

const Banner = () => {
    return (
        <>
            <style jsx>
                {`
                    .ant-carousel .slick-slide {
                        text-align: center;
                        height: 22vh;
                        line-height: 21vh;
                        background: #364d79;
                        overflow: hidden;
                      }
                      
                      .ant-carousel .slick-slide .slick-content {
                        color: #000;
                      }

                      .carousel-holder {
                        background: linear-gradient(180deg, #FFFFFF 0%, #F6F6F6 100%); 
                        height: 54.7%;
                        max-height: 54.7%;
                        width: 100%;
                      }

                      .grayscale { filter: grayscale(100%); }

                      @media only screen and (max-width: 600px) {
                        .pic-holder {
                          display: none;
                        }
                      }
                `}
            </style>
            <div className="carousel-holder">
                <Slider {...sliderSetting}>
                  {bannerSrc.map(e => {
                    return (
                        <div style={{display: "flex", flexDirection: "row"}}>
                          <BannerText description={e.description}/>
                          <Picture src={e.src} />
                        </div>
                    )
                  })}
                </Slider>
            </div>
        </>
    )
}

export default Banner;
