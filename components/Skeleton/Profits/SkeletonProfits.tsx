import Skeleton from 'react-loading-skeleton';

const SkeletonProfits = ({ length }) => {
  const size = [];
  for (var i = 0; i < length; i++) {
    size.push(
      <div>
        <Skeleton circle={true} height={50} width={50} style={{
            marginBottom: "7.25vh",
        }}/>
        <h2 className="header-profit">
          <Skeleton height={"2.652vh"} width={"50%"} />
        </h2>
        <label className="label-profit">
          <Skeleton height={"2.652vh"} width={"50%"} />
        </label>
      </div>,
    );
  }
  return (
    <div>
      <style jsx>
        {`
          .profits {
            padding-top: 9.55vh;
            padding-bottom: 9.55vh;
            text-align: center;
            color: #1a1a1a;
          }

          h1 {
            font-size: 2.3rem;
          }

          .header-profit {
            font-size: 1.25rem;
            margin-bottom: 3%;
          }

          .label-profit {
            font-size: 0.95rem;
          }

          .grid-container {
            justify-content: center;
            display: grid;
            grid-template-columns: 23vw 23vw 23vw;
            grid-template-rows: 21.22vh;
            column-gap: 3.183vh;
            row-gap: 1.5625vw;
          }

          @media only screen and (max-width: 1024px) {
            .grid-container {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
      <div className="profits">
        <h1 style={{marginBottom: "3%"}}>
            <Skeleton height={35} width={300} />
        </h1>
        <div className="grid-container">{size}</div>
      </div>
    </div>
  );
};

export default SkeletonProfits;
