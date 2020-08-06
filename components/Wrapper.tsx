function Wrapper({ children }) {
  return (
    <>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 0 15vw;
          height: 100%;

          box-sizing: border-box;
        }
      `}</style>
      <div className="wrapper">{children}</div>
    </>
  );
}

export default Wrapper;
