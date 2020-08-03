export default function Picture({ imgUrl }) {
  console.log(imgUrl);
  return (
    <>
      <style jsx>
        {`
          .banner-img {
            width: auto;
            height: 100%;
          }
        `}
      </style>
      {/* FIXME: Fix AdBlock of img */}
      <img className="banner-img" src={imgUrl} />
    </>
  );
}
