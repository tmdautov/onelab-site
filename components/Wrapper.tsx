function Wrapper({ children }) {
  return (
    <>
      <style jsx>{`
        .wrapper {
          width: 63.75vw;
          height: 100%;
        }
      `}</style>
      <div className="wrapper">{children}</div>
    </>
  );
}

export default Wrapper;
