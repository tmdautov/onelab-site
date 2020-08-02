import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <style jsx>
            {" "}
            {`
              * {
                justify-content: center;
              }
            `}
          </style>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </Provider>
    </React.StrictMode>
  );
}
