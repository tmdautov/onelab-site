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
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> origin
=======
export default Header;
>>>>>>> f1ef61c696fee833789f38d02af2e1d630f3bac4
