import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";

const Index = () => (
  <Layout>
    <Head>
      <title>Index 페이지</title>
    </Head>
    <h1>hello world</h1>
    <Link href="/about">
      <a style={{ color: "red" }}>hi</a>
    </Link>
  </Layout>
);

export default Index;
