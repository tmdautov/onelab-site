import Wrapper from "../Wrapper";
import Skeleton from "react-loading-skeleton";

const SkeletonBanner = () => {
  return (
    <>
      <style jsx>{`
        .banner-text {
            max-width: 60%;
            height: 80%;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            box-sizing: border-box;
            padding-bottom: 3.125rem;
          }
          h1 {
            font-weight: bold;
            font-size: 2.375rem;
            line-height: 150%;

            text-transform: uppercase;
          }
          .description-text {
            font-size: 1.5rem;
            line-height: 150%;

            text-align: left;
          }
        }
      `}</style>
      <div className="banner">
        <Wrapper>
          <div className="banner_flex">
            <div className="banner-text">
                <h1>
                    <Skeleton height={40} width={300}/>
                </h1>
                <p className="description-text">
                    <Skeleton height={10} width={300}/>
                </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default SkeletonBanner;
