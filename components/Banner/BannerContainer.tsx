import Wrapper from "../Wrapper";
import BannerText from "./BannerText";
import Link from "next/link";

function BannerContainer({ banner }) {
  return (
    <>
      <style jsx>{`
        .banner {
          height: 44.44vh;
          width: 100%;
          background: url(${banner.img}) no-repeat top right;
          background-size: cover;
          box-sizing: border-box;
          cursor: pointer;
          padding-top: 3rem; //FIXME: rem to vh
        }
        .banner_flex {
          height: 100%;
          width: 100%;
          display: flex;
        }
      `}</style>
      <div className="banner">
        <Wrapper>
          <div className="banner_flex">
            <Link href={banner.url}>
              <BannerText
                title={banner.title}
                description={banner.description}
              />
            </Link>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default BannerContainer;
