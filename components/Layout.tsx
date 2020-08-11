import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <style jsx>{`
        .Layout {
          // width: 100vw; //Removed due to the overflow by x
          height: 1px;
          min-height: 100vh;

          position: relative;
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
