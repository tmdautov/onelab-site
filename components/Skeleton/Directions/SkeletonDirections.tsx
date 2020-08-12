import Skeleton from "react-loading-skeleton";

const SkeletonDirections = () => {
    return (
        <div className="direction-card">
      <style jsx>
        {`
          .direction-card {
            width: 22.52vw;
            min-height: 66.3vh;
            background: #f9f9f9;
          }

          h1 {
            font-size: 1.25rem;
            margin-bottom: 1.12vh;
          }

          .flex-holder {
            padding: 4.244vh;
            display: flex;
            flex-direction: column;
          }

          label {
            font-size: 0.85rem;
            margin-bottom: 1.12vh;
          }

          .description {
            width: 16.85vw;
            height: 39.77vh;
            font-size: 0.95rem;
            word-break: break-word;
          }

          .button-holder {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: 3.74vh;
          }

          .button-holder button {
            width: 45%;
            height: 7.127vh;
            transition: background-color 0.5s ease, color 0.5s ease, border 0.5s ease;
            cursor: pointer;
            font-weight: 500;
            border-radius: 6px;
          }

          @media only screen and (max-width: 1024px) {
            .direction-card {
              width: 100%;
            }

            .description {
              width: 100%;
            }

            .button-holder button {
              font-size: 0.75rem;
              font-weight: 500;
            }
          }
        `}
      </style>
      <div className="flex-holder">
        <h1>
            <Skeleton width={250}/>
        </h1>
        <label>
            <Skeleton width={200}/>
        </label>
        <span style={{ marginBottom: '4.6vh' }}>
            <Skeleton width={200}/>
        </span>
        <p className="description">
            <Skeleton height={200} width={250}/>
        </p>
        <div className="button-holder">
            <Skeleton width={100}/>
            <Skeleton width={100}/>
        </div>
      </div>
    </div>
    )
}

export default SkeletonDirections;