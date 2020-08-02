export default function Picture(props: any) {
  return (
    <img
      className="grayscale"
      style={{
        height: "415px",
        position: "relative",
        bottom: props.paddingBottom,
        float: "right",
        right: props.paddingRight,
      }}
      src={props.src}
    />
  );
}
