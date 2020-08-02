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

import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <style jsx global>
            {`
              /* rubik-regular - latin_cyrillic */
              @font-face {
                font-family: "Rubik";
                font-style: normal;
                font-weight: 400;
                src: local("Rubik"), local("Rubik-Regular"),
                  url("../public/assets/fonts/rubik-v9-latin_cyrillic-regular.woff2")
                    format("woff2"),
                  /* Chrome 26+, Opera 23+, Firefox 39+ */
                    url("../public/assets/fonts/rubik-v9-latin_cyrillic-regular.woff")
                    format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */

              body {
                font-family: ${theme.fontFamily};
                font-style: normal;
                font-weight: normal;

                background: ${theme.colors.backgroundColor};
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
