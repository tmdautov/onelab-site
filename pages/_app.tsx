import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import "antd/dist/antd.css";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </Provider>
    </React.StrictMode>
  );
}
