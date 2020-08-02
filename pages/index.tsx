<<<<<<< HEAD
import ProductPage from "./components/ProductContainer";
import { Row, Col } from "antd";
import Banner from "./components/Banner";
import Profits from "./components/Profits";
=======
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductPage from "../components/ProductContainer";
import { Row, Col } from "antd";
import Banner from "../components/Banner";
>>>>>>> dbb4a1cad6d312a99cb4e3ad15b68e23c06bf207

export default function Home() {
  return (
    <>
      <style jsx global>{`

        body {
<<<<<<< HEAD
          overflow-x: hidden;
          font-size: 3vh;
=======
          overflow-x: hidden !important;
>>>>>>> dbb4a1cad6d312a99cb4e3ad15b68e23c06bf207
        }

        .slick-dots {
          bottom: 250px;
        }
      `}</style>
<<<<<<< HEAD
      <Banner />
      <Row justify="center" align="middle">
        <Col span={16}>
          <Profits />
=======
      <Row justify="center" align="middle">
        <Col span={24}>
          <Banner />
>>>>>>> dbb4a1cad6d312a99cb4e3ad15b68e23c06bf207
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={20}>
          <ProductPage />
        </Col>
      </Row>
    </>
  );
}
