
import { Row, Col } from "antd";
import Profits from "../components/Profits";
import Banner from "../components/Banner";
import ProductPage from "../components/ProductContainer";

export default function Home() {
  return (
    <>
      <style jsx global>{`

        body {
          overflow-x: hidden;
          font-size: 3vh;
        }

        .slick-dots {
          bottom: 250px;
        }
      `}</style>
      <Banner />
      <Row justify="center" align="middle">
        <Col span={16}>
          <Profits />
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
