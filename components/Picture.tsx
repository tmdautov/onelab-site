export default function Picture({ imgUrl }) {
  return (
    <>
      <style jsx>
        {`
          .banner-img {
            width: auto;
            height: 100%;
          }

          img {
            position: ;
          }
        `}
      </style>
      <img className="banner-img" src={imgUrl} />
    </>
  );
}
