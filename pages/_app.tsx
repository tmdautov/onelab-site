import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import "antd/dist/antd.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
