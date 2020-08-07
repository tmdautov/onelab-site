import React from "react";
import theme from "../../styles/theme";
import Link from "next/link";

function BannerText({ title, description }) {
  return (
    <>
      <style jsx>
        {`
          .banner-text {
            max-width: 60%;
            height: 80%;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            color: ${theme.colors.black};
            box-sizing: border-box;
            padding-bottom: 3.125rem; //FIXME: rem to vh
          }
          h1 {
            font-weight: bold;
            font-size: 2.375rem;
            line-height: 150%;

            text-transform: uppercase;
          }
          .description-text {
            font-size: 1.5rem;
            line-height: 150%;

            text-align: left;
          }
        `}
      </style>
      <div className="banner-text">
        <h1>{title}</h1>
        <p className="description-text">{description}</p>
      </div>
    </>
  );
}

export default BannerText;
