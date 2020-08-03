import Banner from "../components/Banner";
import ProductPage from "../components/ProductContainer";
import Profits from "../components/Profits";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        .slick-dots {
          bottom: 0!important;
          position: relative;
          transform: translate(-26.845%, -250%);
          //top: 80%;
          //right: 27.845%;
        }
      `}</style>
      <Banner />
      <Profits />
      {/*<Profits />
      <ProductPage />*/}
    </>
  );
}
