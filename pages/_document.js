import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link href="//fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet"/>
            <link href="//fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
 
        </body>
      </Html>
    )
  }
}

export default MyDocument