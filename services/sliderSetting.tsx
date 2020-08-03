import Wrapper from "../components/Wrapper";
import theme from "../styles/theme";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

export const sliderSetting = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  appendDots: (dots) => (
    <>
      <style jsx>{`
        .dots-container {
          width: 100%;
          height: 15.91vh;

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

          margin-right: 1rem; //FIXME: px to rem
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



export const directionsSetting = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplay: false,
  arrows: true,
  className: "directions-element",
  variableWidth: true,
  customPaging: (i) => (
    <div>
      <style jsx>
        {`
          .slick-active {
            opacity: 0.6;
          }
        `}
      </style>
    </div>
  ),
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
    <style jsx>
      {`
        .custom-next-button:hover {
          transition: opacity 0.5s ease;
          opacity: 0.5!important;
        }
      `}
    </style>
    <RightCircleOutlined 
      className="custom-next-button"
      onClick={onClick}
      style={{
        ...style, width: "2.6vw", height: "5.3vh", fontSize: "36px", left: "94.5%",
        position: "absolute", transform: "translate(20%, -150%)", bottom: "101%",
      }}
    />
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <style jsx>
        {`
          .custom-next-button:hover {
            transition: opacity 0.5s ease;
            opacity: 0.5!important;
          }
        `}
      </style>
      <LeftCircleOutlined 
        className="custom-next-button"
        onClick={onClick}
        style={{
          ...style, width: "2.6vw", height: "5.3vh", fontSize: "36px", left: "89.5%",
          position: "absolute", transform: "translate(20%, -150%)", bottom: "101%",
        }}
      />
    </>
  );
}