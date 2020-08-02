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
        `}
      </style>
      <img
        style={{
          height: "51.6vh",
          maxHeight: "914px",
          paddingLeft: "60%",
          transform: "translateY(-63%)"
        }}
        src={props.src}
      />
    </>
  );
}
