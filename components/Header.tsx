import Link from "next/link";
import { Row, Col, Button } from "antd";
import LabLogo from "../public/assets/svg/logo";
import Banner from "./Banner";

function Header() {
  return (
    <>
      <style jsx>{`
        nav {
          background: #1A1A1A;
          height: 104px;
          width: 100%;
          min-width: 100%;

          //position: absolute;
          //top: 0;
        }

        ul {
          height: 50%;
          display: flex;
          line-height: 150%;
          align-items: center;
          transform: translate(7%, 50%);

        }

        li {
          font-weight: 400;
          font-size: 85%;
          text-transform: uppercase!important;
          margin-right: 3%;
          position: relative;
          list-style: none;
        }
        
        a {
          color: #fff;
        }

        .LOGO {
          margin-right: 7.5%;
        }

        .btn-nav {
          position: relative;
          transform: translateX(15%);
        }


      `}</style>
      <nav>
            <ul>
              <li className="LOGO">
                <Link href="/">
                  <a>
                    <LabLogo />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    Направления
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <a>
                    Порядок приема
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>
                    Как проходит обучение
                  </a>
                </Link>
              </li>
              <li className="btn-nav">
                <Link href="/">
                  <Button
                    style={
                      {
                        borderRadius: "6px" , width: "130%", height: "150%", fontSize: "100%", marginRight: "0"
                      }
                    }
                  >
                    Я хочу обучаться!
                  </Button>
                </Link>
              </li>
            </ul>{" "}
      </nav>{" "}
    </>
  );
}

export default Header;
