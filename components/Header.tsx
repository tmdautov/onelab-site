import Link from "next/link";
import LabLogo from "../public/assets/svg/logo";
import theme from "../styles/theme";
import Wrapper from "./Wrapper";
import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { useWindowSize } from "../services/sliderSetting";

function Header() {
  const [hidden, setHidden] = React.useState(true);
  const size = useWindowSize();

  return (
    <>
      <style jsx>{`
        header {
          background: ${theme.colors.black};
          height: 15vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          top: 0;
        }
        nav {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          width: 25% !important;
        }
        .logo svg {
          width: 100%;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 50% !important;
        }
        li a {
          color: ${theme.colors.white};
          text-decoration: none;
          font-size: 0.85em;
          line-height: 150%;
          text-transform: uppercase;
        }
        .border {
          width: 1px;
          height: 26px;
          background: ${theme.colors.white};
        }
        .header-button {
          width: 25% !important;
          display: flex;
          justify-content: flex-end;
        }
        button {
          border-radius: 6px;
          border: none;
          background: ${theme.colors.white};
          width: 12.5vw;
          height: 5.96vh;
          font-weight: 500;
          line-height: 150%;
          text-align: center;
          color: ${theme.colors.black};
          cursor: pointer;
          transition: background-color 0.5s ease, color 0.5s ease;
        }

        button:hover {
          color: ${theme.colors.white};
          background: #f70f0f;
        }

        .logo {
          width: 9.531vw;
        }

        .menu-holder {
          display: none;
        }

        .hidden {
          max-height: 0;
          overflow: hidden;
        }

        .li-btn {
          display: none;
        }

        .adaptive {
          display: none;
        }

        @media (max-width: 1024px) {
          header {
            position: fixed;
            z-index: 100;
            height: 10vh;
          }

          .border {
            height: 1px;
            width: 100%;
            margin: 3.18vh 0;
          }

          ul {
            flex-direction: column;
            top: 10vh;
            right: 0;
            width: 100% !important;
            position: absolute;
            transition: max-height 0.5s ease-out;
            background: ${theme.colors.black};
          }

          .li-btn {
            display: block;
            position: relative;
            bottom: 5%;
          }

          .li-btn button {
            width: 100% !important;
          }

          .adaptive {
            display: block;
          }

          ul li {
            padding: 15%;
          }
          .header-button {
            display: none;
          }

          .menu-holder {
            display: block;
            float: right;
          }
        }
      `}</style>
      <header>
        <Wrapper>
          <nav>
            <div className="logo">
              <Link href="/">
                <a onClick={() => setHidden(true)}>
                  <LabLogo />
                </a>
              </Link>
            </div>
            <ul className={hidden && size.width <= "1024" ? "hidden" : null}>
              <li>
                <Link href="/#directions">
                  <a onClick={() => setHidden(true)}>Направления</a>
                </Link>
              </li>
              <em className="border" />
              <li>
                <Link href="/#order">
                  <a onClick={() => setHidden(true)}>Порядок приема</a>
                </Link>
              </li>
              <em className="border" />

              <li>
                <Link href="/#education">
                  <a onClick={() => setHidden(true)}>Как проходит обучение</a>
                </Link>
              </li>
              <em className="border adaptive" />
              <li className="li-btn">
                <Link href="/#request">
                  <button onClick={() => setHidden(true)}>Подать заявку</button>
                </Link>
              </li>
            </ul>
            <div className="header-button">
              <Link href="/#request">
                <button>Подать заявку</button>
              </Link>
            </div>
            <div className="menu-holder">
              <MenuOutlined
                style={{
                  color: theme.colors.white,
                  fontSize: "234%",
                  cursor: "pointer",
                }}
                onClick={() => setHidden(!hidden)}
              />
            </div>
          </nav>
        </Wrapper>
      </header>
    </>
  );
}

export default Header;
