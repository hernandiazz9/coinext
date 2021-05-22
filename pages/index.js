import { useState, useEffect } from "react";
import { request } from "./api/datocms";
import Banner from "../components/Banner";
import ProductosHome from "../components/ProductosHome";
import { useRouter } from 'next/router'
import GoToTop from "../components/GoToTop";



export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: {
      data,
    },
  };
}
export default function Home({ data }) {
  
  const router = useRouter()
  const ruta = router.pathname
  return (
    <div>
      <Banner />
      <ProductosHome data={data} />
      <GoToTop ruta='/' />
      {/* <Head>{renderMetaTags(data.blog.seo.concat(data.site.favicon))}</Head> */}
      {/* {data.allProductos.map((producto) => (
        <article key={producto.id}>
          <Image 
            lazyLoad={true}
            data={producto.imagen.responsiveImage} />
          <h6>{producto.titulo}</h6>
        </article>
      ))} */}
    </div>
  );
}

const HOMEPAGE_QUERY = `
query MyQuery {
  allProductos {
    id
    queEs
    slug
    titulo
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