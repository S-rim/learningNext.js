import Link from "next/link";

const Index = () => (
  <div>
    <h1>hello world</h1>
    <Link href="/about">
      <a style={{ color: "red" }}>hi</a>
    </Link>
  </div>
);

export default Index;
