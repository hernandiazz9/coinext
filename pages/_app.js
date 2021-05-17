import Layout from "../components/Layout";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style6.css'
import '../styles/shop.css'


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>  
    );
}

export default MyApp;
