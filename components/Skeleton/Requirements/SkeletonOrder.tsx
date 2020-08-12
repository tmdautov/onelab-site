import Skeleton from "react-loading-skeleton"

const SkeletonOrder = () => {
  return (
    <div className="order">
      <style jsx>
        {`
          .order {
            padding-left: 25%;
            margin-bottom: 5%;
          }

          .order p {
            position: relative;
            width: 100%;
          }
        `}
      </style>
      <h1>
          <Skeleton width={200} height ={170} />
      </h1>
    </div>
  );
};

export default SkeletonOrder;
