import { useState, useEffect } from "react";
import { request } from "./api/datocms";
import Banner from "../components/Banner";
import ProductosHome from "../components/ProductosHome";
import { useRouter } from 'next/router'
import GoToTop from "../components/GoToTop";
import MiniProduct from "../components/MiniProduct";





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

  return (
    <div>
      <Banner />
      <ProductosHome data={data} />
      <GoToTop ruta='/' />
      {/* <Head>{renderMetaTags(data.blog.seo.concat(data.site.favicon))}</Head> */}
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
    breveDescripcion
    imagen {
      responsiveImage (imgixParams: { fit: crop, w: 350, h: 450 }) {
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