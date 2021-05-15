import { useRouter } from 'next/router'
import { request } from '../../pages/api/datocms'

const SINGLE_PRODUCT_QUERY = `
query ($slug: String!) {
    allProductos(filter: {slug: {eq: $slug}}) {
      titulo
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
export async function getStaticPaths() {
    const res = await request({
        query: SINGLE_PRODUCT_QUERY_PATHS,     
    })
    console.log(res);
    const paths = res.allProductos.map((producto) => ({
      params: { id: producto.slug.toString() },
    }))
    return { paths, fallback: false }
}
    //query producto con x paths antes obtenido
export async function getStaticProps(context) {
    const slug =  context.params.id
    const data = await request({
    query: SINGLE_PRODUCT_QUERY,
    variables:{slug}
    })
    return { props: { data } } 
}

const Producto = ({ data }) => {
    const router = useRouter();
    console.log(router);
    const { query: { id } } = router;
    console.log(data);
    return (
        <div>
            {data.allProductos.map(producto => (
                <h1>{producto.titulo}</h1>
      ))}
        </div>
    )
}

export default Producto
