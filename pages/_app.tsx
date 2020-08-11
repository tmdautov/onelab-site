import Layout from '../components/Layout';

import '../styles/reset.css';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

import theme from '../styles/theme';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Layout>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
            body {
              font-family: ${theme.fontFamily}; //FIXME: Fix font family
              font-style: normal;
              font-weight: normal;
              background: ${theme.colors.white};
            }
            ::root {
              font-size: 16px;
            }

            html {
              scroll-behavior: smooth;
            }

            button {
              font-family: ${theme.fontFamily}; //FIXME: Fix font family
              font-style: normal;
            }
          `}
        </style>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </Layout>
    </React.StrictMode>
  );
}
