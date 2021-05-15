import { request } from './api/datocms'
import { Image, renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import Headers from '../components/Headers'
import Banner from '../components/Banner'
import Productos from '../components/ProductosHome'

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

`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  })

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
    
      <Banner/>
      <Productos data={data}/>
      algo
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
  )
}