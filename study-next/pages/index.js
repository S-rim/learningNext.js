import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <h1>hello world</h1>
    <Link href="/about">
      <a style={{ color: "red" }}>hi</a>
    </Link>
  </Layout>
);

export default Index;
