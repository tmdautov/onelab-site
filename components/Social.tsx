import React from 'react';
import { InstagramFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import theme from '../styles/theme';

const Social = () => {
  return (
    <>
      <style jsx>
        {`
          label {
            color: #fff;
            font-size: 0.875rem;
            font-weight: 300;
            line-height: 150%;
            margin-bottom: 10%;
            position: relative;
            left: 4%;
          }

          .social-holder {
            display: flex;
            flex-direction: column;
            position: relative;
          }

          ul {
            display: flex;
            flex-direction: row;
          }

          li a {
            color: ${theme.colors.white};
            font-size: 5.8vh;
          }

          li {
            margin-right: 10%;
          }
        `}
      </style>
      <div className="social-holder">
        <label>Мы в социальных сетях</label>
        <ul>
          <li>
            <a href="https://www.instagram.com/accounts/login/?next=/therealonetech/%3Fhl%3Den" target="_blank">
              <InstagramFilled />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/accounts/login/?next=/therealonetech/%3Fhl%3Den" target="_blank">
              <FacebookFilled />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/accounts/login/?next=/therealonetech/%3Fhl%3Den" target="_blank">
              <LinkedinFilled />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;
