import Link from "next/link";

const linkStyle = {
  marginRight: "1rem",
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>about</a>
      </Link>
      <Link href="/ssr-test">
        <a style={linkStyle}>SSR 테스트</a>
      </Link>
    </div>
  );
};

export default Header;
