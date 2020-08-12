import Skeleton from 'react-loading-skeleton';

const SkeletonRequirements = () => {
  return (
    <>
    <div className="requirement">
      <style jsx>
        {`
          .requirement h1 {
            text-align: left;
            font-size: 1.525rem;
            font-weight: 500;
          }

          .requirements p {
            padding: 2% 0 5% 0;
          }

          .requirement {
            background: #f9f9f9;
            width: 88%;
            padding: 5%;
            margin: 0 3% 3% 0;
          }
        `}
      </style>
      <h1>
        <Skeleton width={"9.765625vw"} />
      </h1>
      <p>
        <Skeleton width={"9.765625vw"} />
      </p>
    </div>
    </>
  );
};

export default SkeletonRequirements;
