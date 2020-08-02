function Wrapper({ children }) {
  return (
    <>
      <style jsx>{`
        .wrapper {
          width: 63.75vw;
        }
      `}</style>
      <div className="wrapper">{children}</div>
    </>
  );
}

export default Wrapper;
