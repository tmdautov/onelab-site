import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";
import theme from "../styles/theme";

function DirectionCard({ direction }) {
  return (
    <div className="direction-card">
      <style jsx>
        {`
          .direction-card {
            width: 22.52vw;
            background: #f9f9f9;
          }

          h1 {
            font-size: 1.25rem;
            margin-bottom: 1.12vh;
          }

          .flex-holder {
            padding: 4.244vh;
            display: flex;
            flex-direction: column;
          }

          label {
            font-size: 0.85rem;
          }

          .brief-description {
            width: 16.85vw;
            line-height: 150%;
            font-size: 0.95rem;
          }

          .button-holder {
            padding-top: 3.74vh;
          }

          .button-holder button {
            width: 45%;
            height: 7.127vh;
            margin-right: 0.55vw;
            transition: background-color 0.5s ease, color 0.5s ease,
              border 0.5s ease;
            cursor: pointer;
            font-weight: 500;
            border-radius: 6px;
          }

          .description-btn {
            border: 2px solid ${theme.colors.black};
          }

          .description-btn:hover {
            border: 2px solid ${theme.colors.red};
            color: ${theme.colors.red};
          }

          .scroll-btn {
            color: ${theme.colors.white};
            background: ${theme.colors.black};
            border: none;
          }

          .scroll-btn:hover {
            background: ${theme.colors.red};
          }
        `}
      </style>
      <div className="flex-holder">
        <h1>{direction.name}</h1>
        <label style={{ marginBottom: "3.6vh" }}>{direction.code}</label>
        <span style={{ marginBottom: "4.6vh" }}>
          <CalendarOutlined style={{ marginRight: "3%" }} />
          <label>{direction.date}</label>
        </span>
        <p className="brief-description">{direction.briefDescription}</p>
        <div className="button-holder">
          <Link
            href={`/directions/[code]`}
            as={`/directions/${direction.code}`}
          >
            <button className="description-btn">Подробнее</button>
          </Link>
          <button className="scroll-btn">Участвовать</button>
        </div>
      </div>
    </div>
  );
}

export default DirectionCard;
