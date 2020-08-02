import Link from "next/link";
import LabLogo from "../public/assets/svg/logo";
import theme from "../styles/theme";
import Wrapper from "./Wrapper";

function Header() {
  return (
    <>
      <style jsx>{`
        header {
          width: 100%;
          background: ${theme.colors.black};
          height: 104px;
          width: 100%;
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
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
          height: 26px;
          background: ${theme.colors.white};
        }
        button {
          border-radius: 6px;
          border: none;
          background: ${theme.colors.white};
          width: 12.5vw;
          height: 2.917vw; //FIXME: Fix vw to vh
          font-weight: 500;
          line-height: 150%;
          text-align: center;
          color: ${theme.colors.black};
        }

        .logo {
          width: 9.531vw;
        }
      `}</style>
      <header>
        <Wrapper>
          <nav>
            <div className="logo">
              <Link href="/">
                <a>
                  <LabLogo />
                </a>
              </Link>
            </div>
            <ul>
              <li>
                <Link href="/">
                  <a>Направления</a>
                </Link>
              </li>
              <em className="border"></em>
              <li>
                <Link href="/contacts">
                  <a>Порядок приема</a>
                </Link>
              </li>
              <em className="border"></em>

              <li>
                <Link href="/faq">
                  <a>Как проходит обучение</a>
                </Link>
              </li>
            </ul>

            <button>Я хочу обучаться!</button>
          </nav>
        </Wrapper>
      </header>
    </>
  );
}

export default Header;