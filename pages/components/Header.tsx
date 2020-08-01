import Link from "next/link";
import { Row, Col, Button } from "antd";
import LabLogo from "../svg/logo";
import Banner from "./Banner";

function Header() {
  return (
    <>
      <style jsx>{`
        nav {
          background: #1A1A1A;
          height: 104px;

          //position: absolute;
          //top: 0;
        }

        ul {
          height: 52px;
          display: flex;
          line-height: 150%;
          align-items: center
        }

        li {
          font-family: Rubik;
          font-size: 18px;
          text-transform: uppercase!important;
          margin-right: 48px;
          position: relative;
          top: 23px;
          list-style: none;
        }
        
        a {
          color: #fff;
        }

        .LOGO {
          margin-right: 82px;
        }

        .btn-nav {
          position: relative;
          left: 35px;
        }


      `}</style>
      <nav>
        <Row justify="space-around" align="middle">
          <Col span={20}>
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
                        borderRadius: "6px" , width: "240px", height: "56px", fontSize: "18px", marginRight: "0"
                      }
                    }
                  >
                    Я хочу обучаться!
                  </Button>
                </Link>
              </li>
            </ul>{" "}
          </Col>
        </Row>
      </nav>{" "}
    </>
  );
}

export default Header;
