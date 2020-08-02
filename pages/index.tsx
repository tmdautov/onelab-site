import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductPage from "../components/ProductContainer";
import { Row, Col } from "antd";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden !important;
        }

        .slick-dots {
          bottom: 250px;
        }
      `}</style>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Banner />
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
