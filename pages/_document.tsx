import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <script src="https://kit.fontawesome.com/3ce0f76d3b.js" crossOrigin='anonymous'></script> */}
        </Head>
        <body style={{backgroundColor: 'red'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument