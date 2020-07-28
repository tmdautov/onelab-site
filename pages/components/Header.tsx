import Link from "next/link";

function Header() {
  return (
    <>
      <style jsx>{`
        nav {
          width: 100%;

          position: absolute;
          top: 0;
        }

        ul {
          width: 100%;
          display: flex;
          justify-content: space-around;
          list-style: none;
        }
      `}</style>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="faq">FAQ</Link>
          </li>
        </ul>{" "}
      </nav>{" "}
    </>
  );
}

export default Header;
