import Layout from "../components/Layout";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style6.css'
import '../styles/shop.css'
import '../styles/style.css'
import '../styles/fontawesome-all.css'
import '../styles/contact.css'

import { request } from "../pages/api/datocms";

// export async function getStaticProps() {
//   const data = await request({
//     query: FOOTER_QUERY2,
//   });
//   console.log(data, 'probnado data');
//   return { props: { data } };
// }

function MyApp({ Component,pageProps }) {

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>  
    );
}

export default MyApp;

// const FOOTER_QUERY2 = `
// {
//   contacto {
//     direccion
//     email
//     telefono
//   }
//   allPaginas {
//     titulo
//     contenido
//     imagen {
//       responsiveImage {
//         src
//         srcSet
//         height
//         width
//         sizes
//         webpSrcSet
//       }
//     }
//     slug
//   }
// }
// `;