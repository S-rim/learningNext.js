import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();

    // flush()는 스타일링 작업을 서버사이드에서 사전작업을 해줌. 
    // 서버사이드에서 꼭 실행하지 않아도 클라이언트 쪽에서 컴포넌트가 불러와지면서 스타일링을 하게됨. 
    // 상관은 없지만 클라이언트가 스타일을 만들기 위해 필요한 연산을 아껴주는 장점이 있음.
    const styles = flush();

    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <title>Next.js 연습</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
