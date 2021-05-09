import Link from "next/link";
import { Image } from "react-datocms";

const Productos = ({ data }) => {
  console.log(data.allProductos);
  return (
    <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
      <div className="container-fluid">
        <div className="inner-sec-shop px-lg-4 px-3">
          <h3 className="tittle-w3layouts my-lg-4 my-4">
            Algunos de Nuestros Productos{" "}
          </h3>
          <div className="row">
            {/* Desde aca un solo Producto */}
            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                    <Image
                      lazyLoad={true}
                      data={data.allProductos[0].imagen.responsiveImage}
                    //   style={{
                    //         maxWidth: '100%',
                    //         height: 'auto'
                    //     }}
                    />
                    {/* <img src="images/s1.jpg" className="img-fluid" alt="" /> */}
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                            <Link href="/">{data.allProductos[0].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$575.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
    {/* hasta aca un producto */}
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                      <div style={{
                             maxWidth: '100%',
                             height: 'auto'
                            }}>
                            <Image lazyLoad={true} data={data.allProductos[1].imagen.responsiveImage}/>
                        </div>
                    {/* <img src="images/s2.jpg" className="img-fluid" alt="" /> */}
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                          <Link href="/">{data.allProductos[1].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$325.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-star-o"
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
                            value="Opium (Grey)"
                          />
                          <input type="hidden" name="amount" value="325.00" />
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
            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                  <Image
                      lazyLoad={true}
                      data={data.allProductos[2].imagen.responsiveImage}/>
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                          <Link href="/">{data.allProductos[2].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$575.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
                            value="Kenneth Cole"
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
            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                  <Image
                      lazyLoad={true}
                      data={data.allProductos[3].imagen.responsiveImage}/>
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                          <Link href="/">{data.allProductos[3].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$325.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-star-o"
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
                            value="Farenheit Oval"
                          />
                          <input type="hidden" name="amount" value="325.00" />
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
          </div>
          {/* <!-- //womens -->
				<!-- /mens --> */}
          <div className="row mt-lg-3 mt-0">
            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                  <Image
                      lazyLoad={true}
                      data={data.allProductos[4].imagen.responsiveImage}/>
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                          <Link href="/">{data.allProductos[4].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$775.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
                            value="Aislin Wayfarer"
                          />
                          <input type="hidden" name="amount" value="775.00" />
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
            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                  <Image
                      lazyLoad={true}
                      data={data.allProductos[5].imagen.responsiveImage}/>
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                          <Link href="/">{data.allProductos[5].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$725.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-star-o"
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
                            value="Azmani Round"
                          />
                          <input type="hidden" name="amount" value="725.00" />
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
            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                  <Image
                      lazyLoad={true}
                      data={data.allProductos[6].imagen.responsiveImage}/>
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                          <Link href="/">{data.allProductos[6].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$475.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
                            value="Farenheit Wayfarer"
                          />
                          <input type="hidden" name="amount" value="475.00" />
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
            <div className="col-md-3 product-men women_two">
              <div className="product-googles-info googles">
                <div className="men-pro-item">
                  <div className="men-thumb-item">
                    <div>
                  <Image
                      lazyLoad={true}
                      data={data.allProductos[7].imagen.responsiveImage}/>
                      </div>
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="single.html" className="link-product-add-cart">
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
                          <Link href="/">{data.allProductos[7].titulo}</Link>
                          </h4>
                          <div className="grid-price mt-2">
                            <span className="money ">$825.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star" aria-hidden="true"></i>
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
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-star-o"
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
                            value="Fossil Wayfarer"
                          />
                          <input type="hidden" name="amount" value="825.00" />
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
            {/* <!-- /mens --> */}
          </div>
          {/* <!--//row-->
				<!--/meddle--> */}
          {/* <div className="row">
					<div className="col-md-12 middle-slider my-4">
						<div className="middle-text-info ">

							<h3 className="tittle-w3layouts two text-center my-lg-4 mt-3">Summer Flash sale</h3>
							<div className="simply-countdown-custom" id="simply-countdown-custom"></div>

						</div>
					</div>
				</div> */}
          {/* <!--//meddle-->
				<!--/slide--> */}
          {/*
                 <div className="slider-img mid-sec">
					//banner-sec
					<div className="mid-slider">
						<div className="owl-carousel owl-theme row">
							<div className="item">
								<div className="gd-box-info text-center">
									<div className="product-men women_two bot-gd">
										<div className="product-googles-info slide-img googles">
											<div className="men-pro-item">
												<div className="men-thumb-item">
													<img src="images/s5.jpg" className="img-fluid" alt=""/>
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>
												</div>
												<div className="item-info-product">

													<div className="info-product-price">
														<div className="grid_meta">
															<div className="product_price">
																<h4>
																	<a href="single.html">Fastrack Aviator </a>
																</h4>
																<div className="grid-price mt-2">
																	<span className="money ">$325.00</span>
																</div>
															</div>
															<ul className="stars">
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-o" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
														<div className="googles single-item hvr-outline-out">
															<form action="#" method="post">
																<input type="hidden" name="cmd" value="_cart"/>
																<input type="hidden" name="add" value="1"/>
																<input type="hidden" name="googles_item" value="Fastrack Aviator"/>
																<input type="hidden" name="amount" value="325.00"/>
																<button type="submit" className="googles-cart pgoogles-cart">
																	<i className="fas fa-cart-plus"></i>
																</button>
															</form>

														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="gd-box-info text-center">
									<div className="product-men women_two bot-gd">
										<div className="product-googles-info slide-img googles">
											<div className="men-pro-item">
												<div className="men-thumb-item">
													<img src="images/s6.jpg" className="img-fluid" alt=""/>
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>
												</div>
												<div className="item-info-product">

													<div className="info-product-price">
														<div className="grid_meta">
															<div className="product_price">
																<h4>
																	<a href="single.html">MARTIN Aviator </a>
																</h4>
																<div className="grid-price mt-2">
																	<span className="money ">$425.00</span>
																</div>
															</div>
															<ul className="stars">
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-o" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
														<div className="googles single-item hvr-outline-out">
															<form action="#" method="post">
																<input type="hidden" name="cmd" value="_cart"/>
																<input type="hidden" name="add" value="1"/>
																<input type="hidden" name="googles_item" value="MARTIN Aviator"/>
																<input type="hidden" name="amount" value="425.00"/>
																<button type="submit" className="googles-cart pgoogles-cart">
																	<i className="fas fa-cart-plus"></i>
																</button>
															</form>

														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="gd-box-info text-center">
									<div className="product-men women_two bot-gd">
										<div className="product-googles-info slide-img googles">
											<div className="men-pro-item">
												<div className="men-thumb-item">
													<img src="images/s7.jpg" className="img-fluid" alt=""/>
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>
												</div>
												<div className="item-info-product">

													<div className="info-product-price">
														<div className="grid_meta">
															<div className="product_price">
																<h4>
																	<a href="single.html">Royal Son Aviator </a>
																</h4>
																<div className="grid-price mt-2">
																	<span className="money ">$425.00</span>
																</div>
															</div>
															<ul className="stars">
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-o" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
														<div className="googles single-item hvr-outline-out">
															<form action="#" >
																<input type="hidden" name="cmd" value="_cart"/>
																<input type="hidden" name="add" value="1"/>
																<input type="hidden" name="googles_item" value="Royal Son Aviator"/>
																<input type="hidden" name="amount" value="425.00"/>
																<button type="" className="googles-cart pgoogles-cart">
																	<i className="fas fa-cart-plus"></i>
																</button>
															</form>

														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="gd-box-info text-center">
									<div className="product-men women_two bot-gd">
										<div className="product-googles-info slide-img googles">
											<div className="men-pro-item">
												<div className="men-thumb-item">
													<img src="images/s8.jpg" className="img-fluid" alt=""/>
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>
												</div>
												<div className="item-info-product">

													<div className="info-product-price">
														<div className="grid_meta">
															<div className="product_price">
																<h4>
																	<a href="single.html">Irayz Butterfly </a>
																</h4>
																<div className="grid-price mt-2">
																	<span className="money ">$281.00</span>
																</div>
															</div>
															<ul className="stars">
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-o" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
														<div className="googles single-item hvr-outline-out">
															<form action="#" method="post">
																<input type="hidden" name="cmd" value="_cart"/>
																<input type="hidden" name="add" value="1"/>
																<input type="hidden" name="googles_item" value="Irayz Butterfly"/>
																<input type="hidden" name="amount" value="281.00"/>
																<button type="submit" className="googles-cart pgoogles-cart">
																	<i className="fas fa-cart-plus"></i>
																</button>
															</form>

														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="gd-box-info text-center">
									<div className="product-men women_two bot-gd">
										<div className="product-googles-info slide-img googles">
											<div className="men-pro-item">
												<div className="men-thumb-item">
													<img src="images/s9.jpg" className="img-fluid" alt=""/>
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>
												</div>
												<div className="item-info-product">

													<div className="info-product-price">
														<div className="grid_meta">
															<div className="product_price">
																<h4>
																	<a href="single.html">Jerry Rectangular </a>
																</h4>
																<div className="grid-price mt-2">
																	<span className="money ">$525.00</span>
																</div>
															</div>
															<ul className="stars">
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-o" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
														<div className="googles single-item hvr-outline-out">
															<form action="#" method="post">
																<input type="hidden" name="cmd" value="_cart"/>
																<input type="hidden" name="add" value="1"/>
																<input type="hidden" name="googles_item" value="Jerry Rectangular "/>
																<input type="hidden" name="amount" value="525.00"/>
																<button type="submit" className="googles-cart pgoogles-cart">
																	<i className="fas fa-cart-plus"></i>
																</button>
															</form>

														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="gd-box-info text-center">
									<div className="product-men women_two bot-gd">
										<div className="product-googles-info slide-img googles">
											<div className="men-pro-item">
												<div className="men-thumb-item">
													<img src="images/s10.jpg" className="img-fluid" alt=""/>
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>
												</div>
												<div className="item-info-product">

													<div className="info-product-price">
														<div className="grid_meta">
															<div className="product_price">
																<h4>
																	<a href="single.html">Herdy Wayfarer </a>
																</h4>
																<div className="grid-price mt-2">
																	<span className="money ">$325.00</span>
																</div>
															</div>
															<ul className="stars">
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-o" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
														<div className="googles single-item hvr-outline-out">
															<form action="#" method="post">
																<input type="hidden" name="cmd" value="_cart"/>
																<input type="hidden" name="add" value="1"/>
																<input type="hidden" name="googles_item" value="Herdy Wayfarer"/>
																<input type="hidden" name="amount" value="325.00"/>
																<button type="submit" className="googles-cart pgoogles-cart">
																	<i className="fas fa-cart-plus"></i>
																</button>
															</form>

														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> 
			     {/* <!-- /testimonials -->  */}
          {/* <div className="testimonials py-lg-4 py-3 mt-4">
					<div className="testimonials-inner py-lg-4 py-3">
						<h3 className="tittle-w3layouts text-center my-lg-4 my-4">Tesimonials</h3>
						<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<div className="testimonials_grid text-center">
										<h3>Anamaria
											<span>Customer</span>
										</h3>
										<label>United States</label>
										<p>Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus.
											Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.</p>
									</div>
								</div>
								<div className="carousel-item">
									<div className="testimonials_grid text-center">
										<h3>Esmeralda
											<span>Customer</span>
										</h3>
										<label>United States</label>
										<p>Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus.
											Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.</p>
									</div>
								</div>
								<div className="carousel-item">
									<div className="testimonials_grid text-center">
										<h3>Gretchen
											<span>Customer</span>
										</h3>
										<label>United States</label>
										<p>Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus.
											Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.</p>
									</div>
								</div>
								<a className="carousel-control-prev test" href="#carouselExampleControls" role="button" data-slide="prev">
									<span className="fas fa-long-arrow-alt-left"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next test" href="#carouselExampleControls" role="button" data-slide="next">
									<span className="fas fa-long-arrow-alt-right" aria-hidden="true"></span>
									<span className="sr-only">Next</span>

								</a>
							</div>
						</div>
					</div>
				</div>
				<!-- //testimonials --> 
                */}
          <div className="row galsses-grids pt-lg-5 pt-3">
            <div className="col-lg-6 galsses-grid-left">
              <figure className="effect-lexi">
                <img src="images/banner4.jpg" alt="" className="img-fluid" />
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
                <img src="images/banner1.jpg" alt="" className="img-fluid" />
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

export default Productos;
