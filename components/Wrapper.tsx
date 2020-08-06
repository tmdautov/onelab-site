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

        @media (max-width: 1000px) {
          .wrapper {
            padding: 0 7.5vw;
          }
        }
      `}</style>
      <div className="wrapper">{children}</div>
    </>
  );
}

export default Wrapper;
