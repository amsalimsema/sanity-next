import Link from "next/link";
const NavBar = () => {
  return (
    <div className="nav">
      <Link href="/">
        <a>
          <div className="logo"></div>
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
