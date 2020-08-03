import React from "react";
import theme from "../styles/theme";

function BannerText({ title, description, url }) {
  return (
    <>
      <style jsx>
        {`
          .banner-text {
            max-width: 60%;
            height: 80%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            color: ${theme.colors.black};
            box-sizing: border-box;
            padding-bottom: 50px; //FIXME: px to vh
          }
          h1 {
            font-weight: bold;
            font-size: 38px;
            line-height: 150%;

            text-transform: uppercase;
          }
          .description-text {
            font-size: 1.25vw; //FIXME: vw to rem
            line-height: 150%;

            text-align: left;
          }
          button {
            width: 240px;
            height: 56px;
            border-radius: 6px;
            background: ${theme.colors.black};
            color: ${theme.colors.white};
            border: none;
            cursor: pointer;
            transition: background-color 0.5s ease, color 0.5s ease;
          }
  
          button:hover {
            color: ${theme.colors.white};
            background: #f70f0f;
          }

        `}
      </style>
      <div className="banner-text">
        <h1>{title}</h1>
        <p className="description-text">{description}</p>
        <button>Подать заявку</button>
      </div>
    </>
  );
}

export default BannerText;
