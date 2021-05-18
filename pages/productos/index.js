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
      <div className="row">
        {/* <!-- product left --> */}
        <div className="side-bar col-lg-3">
          <div className="search-hotel">
            <h3 className="agileits-sear-head">Search Here..</h3>
            <form>
              <input
                className="form-control"
                type="search"
                name="search"
                placeholder="Search here..."
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
            <h3 className="agileits-sear-head">Price range</h3>
            <ul className="dropdown-menu6">
              <li>
                <div id="slider-range"></div>
                <input
                  type="text"
                  id="amount"
                  style={{
                    border: "0",
                    color: " #ffffff",
                    fontWeight: "normal",
                  }}
                />
              </li>
            </ul>
          </div>
          {/* <!-- //price range -->
							<!--preference --> */}
          <div className="left-side">
            <h3 className="agileits-sear-head">Deal Offer On</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Backpack</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Phone Pocket</span>
              </li>
            </ul>
          </div>
          {/* <!-- // preference --> */}
          {/* <!-- discounts --> */}
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
          {/* <!-- //discounts -->
							<!-- reviews --> */}
          <div className="customer-rev left-side">
            <h3 className="agileits-sear-head">Customer Review</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>5.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>4.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>3.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <span>2.5</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- //reviews -->
							<!-- deals --> */}
          <div className="deal-leftmk left-side">
            <h3 className="agileits-sear-head">Special Deals</h3>
            <div className="special-sec1">
              <div className="img-deals">
                <img src="images/s1.jpg" alt="" />
              </div>
              <div className="img-deal1">
                <h3>Farenheit (Grey)</h3>
                <a href="single.html">$575.00</a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/s2.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Opium (Grey)</h3>
                <a href="single.html">$325.00</a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/m2.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Azmani Round</h3>
                <a href="single.html">$725.00</a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/m4.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Farenheit Oval</h3>
                <a href="single.html">$325.00</a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          {/* <!-- //deals --> */}
        </div>
        {/* <!-- //product left --> */}
        {/* <!--/product right--> */}
        <div className="left-ads-display col-lg-9">
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
    </>
  );
};

export default index;
