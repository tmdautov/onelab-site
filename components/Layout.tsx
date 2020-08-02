import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <style jsx>{`
        .Layout {
          width: 100vw;
          height: 1px;
          min-height: 100vh;
        }
      `}</style>
      <div className="Layout">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
