import { useRouter } from "next/router";
import { request } from "../../pages/api/datocms";
import { Image } from "react-datocms";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { async } from "regenerator-runtime";
import Head from 'next/head'
// import Head from '../../public/css/bootstrap.css'

const SINGLE_PRODUCT_QUERY = `
query ($slug: String!) {
  allProductos(filter: {slug: {eq: $slug}}) {
    titulo
    queEs
    id
    categorias {
      categoria
      id
    }
    slug
    breveDescripcion
    imagen {
      responsiveImage {
        src
        srcSet
        width
        height
        aspectRatio
        sizes
        webpSrcSet
      }
    }
  }
}

`;
const SINGLE_PRODUCT_QUERY_PATHS = `
query  {
    allProductos {
      slug
    }
  }  
`;
// query para obtener todos los paths

export const  getStaticPaths = async () => {
  const res = await request({
    query: SINGLE_PRODUCT_QUERY_PATHS
  });
  const paths = await res.allProductos.map((producto) => {
    return{
      params: { id: producto.slug.toString() }
    }
  });
  return { paths, fallback: false };
}
//query producto con x paths antes obtenido
export const getStaticProps = async (context)=> {
  console.log(context,'viendo que tiene el context');
  const slug = context.params.id;
  const data = await request({
    query: SINGLE_PRODUCT_QUERY,
    variables: { slug }
  });
  return { props: { data } }
}

const Producto = ({ data: { allProductos } }) => {
  // const router = useRouter();
  // console.log(router);
  // const {
  //   query: { id },
  // } = router;
  console.log(allProductos,'los productos desde id');
  const {imagen, breveDescripcion, titulo, categorias  } = allProductos[0]
  

  return (
    <div>
      <h1>holamiundo</h1>
      
      
    </div>
  );
};

export default Producto;