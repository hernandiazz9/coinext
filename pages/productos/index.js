import { request } from "../api/datocms";
import Link from "next/link";
import {Image} from 'react-datocms'

const PRODUCT_QUERY = `
query  {
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
  }

`;

export async function getStaticProps() {
  const data = await request({
    query: PRODUCT_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}

const index = ({ data: { allProductos } }) => {
  return (
    <>
      <div className="container ">
      <div className="row ">
        <div className="sticky-category col-lg-2"> {/*hacer sticky la columna la puta */}
        <div className="side-bar " >        
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
            <h3 className="agileits-sear-head">Discount</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">5% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">10% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">20% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">30% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">50% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">60% or More</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="left-ads-display col-lg-10">
          <div className="wrapper_top_shop">
            <div className="row">
              {/* <!-- /womens --> */}
              {allProductos.map((producto) => (
                <div key={producto.id} className="col-md-3 product-men women_two shop-gd">
                  <div className="product-googles-info googles">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <Image lazyLoad={true} data={producto.imagen.responsiveImage} />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="#"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <h4>
                                <Link href="#">{producto.titulo}</Link>
                              </h4>
                              <div className="grid-price mt-2">
                                <span className="money ">$575.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="googles single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input
                                type="hidden"
                                name="googles_item"
                                value="Farenheit"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="575.00"
                              />
                              <button
                                type="submit"
                                className="googles-cart pgoogles-cart"
                              >
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </form>
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
          {/* <!--//product right--> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default index;
