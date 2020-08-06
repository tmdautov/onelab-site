import Wrapper from "../Wrapper";
import BannerText from "./BannerText";

function BannerContainer({ banner }) {
  return (
    <>
      <style jsx>{`
        .banner {
          height: 44.44vh;
          width: 100%;

          background: url(${banner.img}) no-repeat center;
          background-size: cover;

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
      <div className="banner">
        <Wrapper>
          <div className="banner_flex">
            <BannerText
              title={banner.title}
              description={banner.description}
              url={banner.url}
              buttonText={banner.buttonText}
            />
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default BannerContainer;
