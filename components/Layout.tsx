function Layout({ children }) {
  return (
    <>
      <style jsx>{`
        .Layout {
          width: 100vw;
          height: 1px;
          min-height: 100vh;

          position: relative;
        }
      `}</style>
      <div className="Layout">{children}</div>
    </>
  );
}

export default Layout;
