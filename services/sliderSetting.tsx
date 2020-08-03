import Wrapper from "../components/Wrapper";
import theme from "../styles/theme";

export const sliderSetting = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnFocus: true,
  arrows: false,
  appendDots: (dots) => (
    <>
      <style jsx>{`
        .dots-container {
          width: 100%;
          height: 120px; //FIXME: Make it responsive px to vh

          position: absolute;
          bottom: 0;
          left: 0;
        }
        .dots-list {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;

          list-style: none;
        }
      `}</style>
      <div className="dots-container">
        <Wrapper>
          <ul className="dots-list"> {dots} </ul>
        </Wrapper>
      </div>
    </>
  ),
  customPaging: (i) => (
    <div className="dot">
      <style jsx global>{`
        .dot {
          width: 32px;
          height: 32px;

          margin-right: 16px; //FIXME: px to rem
          cursor: pointer;

          box-sizing: border-box;
          border: 5px solid ${theme.colors.black};
          border-radius: 50%;
        }

        .slick-active .dot {
          border: 5px solid #d10001;
        }

        // .dot:last-child {
        //   margin-right: 0;
        // } //FIXME: Fix last child
      `}</style>
    </div>
  ),
};
