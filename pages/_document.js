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
            <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
            <link href="css/login_overlay.css" rel='stylesheet' type='text/css' />
            <link href="css/style6.css" rel='stylesheet' type='text/css' />
            <link rel="stylesheet" href="css/shop.css" type="text/css" />
            <link rel="stylesheet" href="css/owl.carousel.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="css/owl.theme.css" type="text/css" media="all"/>
            <link href="css/style.css" rel='stylesheet' type='text/css' />
            <link href="css/fontawesome-all.css" rel="stylesheet"/>
            <link href="//fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet"/>
            <link href="//fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800" rel="stylesheet"/>
            <link href="css/simplyCountdown.css" rel='stylesheet' type='text/css' />
        </Head>
        <body>
          <Main />
          <NextScript />
            <script src="js/jquery-2.2.3.min.js"></script>
            <script src="js/modernizr-2.6.2.min.js"></script>
            <script src="js/classie-search.js"></script>
            <script src="js/demo1-search.js"></script>
            {/* <!--//search jQuery--> */}
            {/* <!-- cart-js --> */}
            <script src="js/minicart.js"></script>
            <script src="js/simplyCountdown.js"></script>
            <script src="js/owl.carousel.js"></script>
            <script src="js/move-top.js"></script>
            <script src="js/easing.js"></script>
            <script src="js/bootstrap.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument