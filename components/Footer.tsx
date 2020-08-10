import Wrapper from "./Wrapper";
import Link from "next/link";
import theme from "../styles/theme";
import Social from "./Social";

function Footer() {
  return (
    <div className="footer-container">
      <style jsx>{`
        
        .footer-container {
          margin-top: 9.55vh;
        }

        footer {
          width: 100%;
          background: ${theme.colors.black};
          height: 13.79vh;
          width: 100%;
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          bottom: 0;
        }
        nav {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 32.552vw;
        }
        li a {
          color: ${theme.colors.white};
          text-decoration: none;
          font-size: 0.938vw; //FIXME: Fix fs vw
          line-height: 150%;
          text-transform: uppercase;
        }
        .border {
          width: 1px;
          height: 3.45vh;
          background: ${theme.colors.white};
        }

        @media (max-width: 1024px) {

          ul {
            display: none;
          }
        }
      `}</style>
      <footer>
        <Wrapper>
          <nav>
            <div>
              <Social />
            </div>
            <ul>
              <li>
                <Link href="/#directions">
                  <a>Направления</a>
                </Link>
              </li>
              <em className="border"></em>
              <li>
                <Link href="/#order">
                  <a>Порядок приема</a>
                </Link>
              </li>
              <em className="border"></em>
              <li>
                <Link href="/#education">
                  <a>Как проходит обучение</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Wrapper>
      </footer>
    </div>
  );
}

export default Footer;
