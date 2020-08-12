import Skeleton from 'react-loading-skeleton';

const SkeletonRequest = () => {
  const inputs = [];
  for (var i = 0; i < 7; i++) {
    inputs.push(
      <div
        className="input"
        style={{
          marginTop: '3%',
          padding: '2.5%',
        }}>
        <Skeleton height={'5.5vh'} />
      </div>,
    );
  }
  inputs.push(
    <div
      className="input"
      style={{
        marginTop: '3%',
        padding: '2.5%',
      }}>
      <Skeleton height={'7.5vh'} />
    </div>,
  );
  inputs.push(
    <div
      className="input"
      style={{
        padding: "3% 2%",
        margin: "auto",
        width: "50%",
      }}>
      <Skeleton height={'4.5vh'} />
    </div>,
  );
  return (
    <div className="form">
      <style jsx>
        {`
          .form {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      {inputs}
    </div>
  );
};

export default SkeletonRequest;
