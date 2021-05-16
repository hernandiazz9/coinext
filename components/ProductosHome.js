import Link from "next/link";
import { Image } from "react-datocms";

const ProductosHome = ({ data: { allProductos } }) => {
  const seisProd = allProductos.slice(0, 8);
  return (
    <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
      <div className="container-fluid">
        <div className="inner-sec-shop px-lg-4 px-3">
          <h3 className="tittle-w3layouts my-lg-4 my-4">
            Algunos de Nuestros Productos{" "}
          </h3>
          <div className="row">
            {/* Desde aca un solo Producto */}
            {seisProd.map((producto) => (
              <div
                key={producto.slug}
                className="col-md-3 product-men women_two"
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
                          <Link
                            href="/productos/[id]"
                            as={`/productos/${producto.slug}`}
                          >
                            <span
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Mostrar
                            </span>
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product">
                      <div className="info-product-price">
                        <div className="grid_meta">
                          <div className="product_price">
                            <h4>
                              <Link href="/">{producto.titulo}</Link>
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
                            <input type="hidden" name="amount" value="575.00" />
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

          <div className="row galsses-grids pt-lg-5 pt-3">
            <div className="col-lg-6 galsses-grid-left">
              <figure className="effect-lexi">
                <img src="images/banner4.png" alt="" className="img-fluid" />
                <figcaption>
                  <h3>
                    Editor's
                    <span>Pick</span>
                  </h3>
                  <p> Express your style now.</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-6 galsses-grid-left">
              <figure className="effect-lexi">
                <img src="images/banner1.jpeg" alt="" className="img-fluid" />
                <figcaption>
                  <h3>
                    Editor's
                    <span>Pick</span>
                  </h3>
                  <p>Express your style now.</p>
                </figcaption>
              </figure>
            </div>
          </div>
          {/* <!-- /grids --> */}
          <div className="bottom-sub-grid-content py-lg-5 py-3">
            <div className="row">
              <div className="col-lg-4 bottom-sub-grid text-center">
                <div className="bt-icon">
                  <span className="far fa-hand-paper"></span>
                </div>

                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">
                  Satisfaction Guaranteed
                </h4>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit.
                </p>
                <p>
                  <a
                    href="shop.html"
                    className="btn btn-sm animated-button gibson-three mt-4"
                  >
                    Shop Now
                  </a>
                </p>
              </div>
              {/* <!-- /.col-lg-4 --> */}
              <div className="col-lg-4 bottom-sub-grid text-center">
                <div className="bt-icon">
                  <span className="fas fa-rocket"></span>
                </div>

                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">
                  Fast Shipping
                </h4>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit.
                </p>
                <p>
                  <a
                    href="shop.html"
                    className="btn btn-sm animated-button gibson-three mt-4"
                  >
                    Shop Now
                  </a>
                </p>
              </div>
              {/* <!-- /.col-lg-4 --> */}
              <div className="col-lg-4 bottom-sub-grid text-center">
                <div className="bt-icon">
                  <span className="far fa-sun"></span>
                </div>

                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">
                  UV Protection
                </h4>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit.
                </p>
                <p>
                  <a
                    href="shop.html"
                    className="btn btn-sm animated-button gibson-three mt-4"
                  >
                    Shop Now
                  </a>
                </p>
              </div>
              {/* <!-- /.col-lg-4 --> */}
            </div>
          </div>
          {/* <!-- //grids -->
				<!-- /clients-sec --> */}
          <div className="testimonials p-lg-5 p-3 mt-4">
            <div className="row last-section">
              <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                <div className="mail-grid-icon text-center">
                  <i className="fas fa-gift"></i>
                </div>
                <div className="mail-grid-text-info">
                  <h3>Genuine Product</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                <div className="mail-grid-icon text-center">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="mail-grid-text-info">
                  <h3>Secure Products</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                <div className="mail-grid-icon text-center">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="mail-grid-text-info">
                  <h3>Cash on Delivery</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                <div className="mail-grid-icon text-center">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="mail-grid-text-info">
                  <h3>Easy Delivery</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosHome;
