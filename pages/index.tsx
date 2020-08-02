import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductPage from "../components/ProductContainer";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          // overflow-x: hidden !important;
        }

        .slick-dots {
          bottom: 250px;
        }
      `}</style>
      <Banner />
      <ProductPage />
    </>
  );
}
