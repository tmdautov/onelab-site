import Link from "next/link";

const ulStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  listStyle: "none",
};

function Header() {
  return (
    <ul style={ulStyle}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/contacts">Contacts</Link>
      </li>
      <li>
        <Link href="faq">FAQ</Link>
      </li>
    </ul>
  );
}

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> origin
