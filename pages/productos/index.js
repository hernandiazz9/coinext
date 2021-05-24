import { useState } from "react";
import { request } from "../api/datocms";
import Link from "next/link";
import { Image } from "react-datocms";
import GoToTop from '../../components/GoToTop'

const PRODUCT_QUERY = `
query {
  allProductos {
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
  allCategoriaxes {
    id
    categoria
  } 
}

`;

export async function getStaticProps() {
  const data = await request({
    query: PRODUCT_QUERY,
    // variables:{cuantosQuiero, desdeDonde }
  });
  return { props: { data } };
}

const index = ({ data: { allProductos, allCategoriaxes } }) => {
  // console.log(allProductos);
  //componente

  const [productosTodos, setproductosTodos] = useState([]);
  const [hastaDonde, setHastaDonde] = useState(9);

  if (productosTodos.length === 0) {
    setproductosTodos(allProductos.slice(0, hastaDonde));
  }
  const nextProductos = () => {
    const num = hastaDonde + 9;
    setHastaDonde((hastaDonde) => hastaDonde + 9);
    setproductosTodos(allProductos.slice(0, num));
  };
  const click = (categoria) =>{
    
  //   const filtrados = allProductos.filter( producto => {
  //     console.log(producto.categorias.map(categoria=>categoria.categoria).includes(categoria));
       
  //     // const prods = producto.categorias.map(cate=> cate.categoria)

  //     // console.log(producto.categorias);  

  //     // console.log(filtrados);
  // })

    

    
    // console.log('categoria pedida:',categoria)
    // const filtrados = allProductos.filter( producto => {
    //   // console.log('producto',producto);
    //   const prods = producto.categorias.map(cate=>{
    //     console.log(cate);
    //   })
    //   console.log(producto.categorias)
    // })
    
  }
  return (
    <div className="container ">
      <div className="row ">
        <div className=" col-lg-3">
          <div className="side-bar sticky-category ">
            <div className="search-hotel">
              <h3 className="agileits-sear-head">Busca tu Producto</h3>
              <form>
                <input
                  className="form-control"
                  type="search"
                  name="search"
                  placeholder="Buscar..."
                  required=""
                />
                <button className="btn1">
                  <i className="fas fa-search"></i>
                </button>
                <div className="clearfix"> </div>
              </form>
            </div>
            {/* <!-- price range --> */}
            <div className="range">
              <h3 className="agileits-sear-head">Categorías</h3>
            </div>
            <div className="left-side">
              <h3 className="agileits-sear-head">Humano</h3>
              <ul>
                {allCategoriaxes.map((categoria)=>(
                  <li key={categoria.id}>
                    <input type="checkbox" onClick={()=>click(categoria.categoria)} className="checked" />
                <span className="span">{categoria.categoria}</span>
                </li>
                ))}
                
              </ul>
            </div>
          </div>
        </div>
        <div className="left-ads-display col-lg-9">
          <div className="wrapper_top_shop">
            <div className="row">
              {/* <!-- /womens --> */}
              {productosTodos &&
                productosTodos.map((producto) => (
                  <div
                    key={producto.id}
                    className="col-md-4 product-men women_two shop-gd"
                  >
                    <div className="product-googles-info googles">
                      <div className="men-pro-item">
                        <div className="men-thumb-item">
                          <Image
                            lazyLoad={true}
                            data={producto.imagen.responsiveImage}
                          />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <Link href={`/productos/${producto.slug}`}>
                                <span className="link-product-add-cart">
                                  Quick View
                                </span>
                              </Link>
                            </div>
                          </div>
                          <span className="product-new-top">Disponible</span>
                        </div>
                        <div className="item-info-product">
                          <div className="info-product-price">
                            <div className="grid_meta">
                              <div className="product_price">
                                <Link href="#">{producto.titulo}</Link>
                              </div>
                            </div>
                            <div className="">
                              <p>{producto.breveDescripcion}</p>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4">
        <button
          type="button"
          onClick={() => nextProductos(hastaDonde)}
          className="btn btn-secondary"
        >
          <span>Mostrar mas</span>
        </button>
      </div>
      <GoToTop ruta='/productos' />
    </div>
  );
};

export default index;
