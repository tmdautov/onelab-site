function Wrapper({ children }) {
  return (
    <>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 0 15vw;
          height: 100%;
        }
      `}</style>
      <div className="wrapper">{children}</div>
    </>
  );
}

export default Wrapper;
