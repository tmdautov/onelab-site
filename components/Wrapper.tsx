function Wrapper({ children }) {
  return (
    <>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 10vw;
          height: 100%;
        }
      `}</style>
      <div className="wrapper">{children}</div>
    </>
  );
}

export default Wrapper;
