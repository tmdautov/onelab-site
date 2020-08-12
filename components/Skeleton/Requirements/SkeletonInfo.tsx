import Skeleton from 'react-loading-skeleton';

const SkeletonInfo = () => {
  return (
    <div className="flex-holder">
      <style jsx>
        {`
          .flex-holder {
            justify-content: center;
            display: grid;
            grid-template-columns: 23vw 23vw 23vw;
            grid-template-rows: 21.22vh;
            column-gap: 3.183vh;
            row-gap: 1.5625vw;
          }
          .content-holder h3 {
            font-size: 0.9rem;
            text-align: center;
          }
          @media (max-width: 1024px) {
            .flex-holder {
              display: flex;
              flex-direction: column;
            }
            p {
              margin: 10%auto;
              text-align: center;
            }
            .content-holder {
              text-align: center;
              display: flex;
              flex-direction: column;
            }

            .content-holder h3 {
              font-size: 0.9rem;
              padding: 0;
              margin-bottom: 20%;
            }
            .icon {
              margin: 0;
            }
          }
        `}
      </style>
      <div className="content-holder">
        <Skeleton circle height={50} width={50} />
        <h3>
          <Skeleton width={100} />
        </h3>
      </div>
      <div className="content-holder">
        <Skeleton circle height={50} width={50} />
        <h3>
          <Skeleton width={100} />
        </h3>
      </div>
      <div className="content-holder">
        <Skeleton circle height={50} width={50} />
        <h3>
          <Skeleton width={100} />
        </h3>
      </div>
    </div>
  );
};

export default SkeletonInfo;
