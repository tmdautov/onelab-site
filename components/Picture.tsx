export default function Picture(props: any) {
  return (
    <>
      <style jsx>
        {`
          @media only screen and (max-width: 720px) {
            img {
              display: none;
            }
          }
          
          img {
            position:
          }
        `}
      </style>
      <img
        style={{
          height: "51.6vh",
          maxHeight: "914px",
          paddingLeft: "45%",
          transform: "translateY(-3%)"
        }}
        src={props.src}
      />
    </>
  );
}
