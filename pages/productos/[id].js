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
  const paths =  res.allProductos.map((producto) => {
    return{
      params: { id: producto.slug.toString() }
    }
  });
  return { paths, fallback: false };
}
//query producto con x paths antes obtenido
export const getStaticProps = async (context)=> {
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
  console.log(allProductos);
  return (
    <div>
      {/* <Head>
            <link href="../../public/css/bootstrap.css" rel='stylesheet' type='text/css' />
            <link href="../../public/css/login_overlay.css" rel='stylesheet' type='text/css' />
            <link href="../../public/css/style6.css" rel='stylesheet' type='text/css' />
            <link rel="stylesheet" href="../../public/css/shop.css" type="text/css" />
            <link rel="stylesheet" href="../../public/css/owl.carousel.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="../../public/css/owl.theme.css" type="text/css" media="all"/>
            <link href="../../public/css/style.css" rel='stylesheet' type='text/css' />
            <link href="../../public/css/fontawesome-all.css" rel="stylesheet"/>
            <link href="//fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet"/>
            <link href="//fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800" rel="stylesheet"/>
            <link href="../../public/css/simplyCountdown.css" rel='stylesheet' type='text/css' />
        </Head> */}
      <section className="banner-bottom-wthreelayouts  py-lg-5 py-3">
        <div className="container">
          <div className="inner-sec-shop pt-lg-4 pt-3 ">
            <div className="row" >
              <div  className="col-lg-5 single-right-left ">
                <div className="grid  images_3_of_2">
                  <div className="flexslider1">
                    <div  className="slides">
                      <Carousel showThumbs={false}>
                          <div className="thumb-image">
                            <Image
                              lazyLoad={true}
                              data={allProductos[0].imagen.responsiveImage}
                            />
                          </div>
                          <div className="thumb-image">
                            <Image
                              lazyLoad={true}
                              data={allProductos[0].imagen.responsiveImage}
                            />
                          </div>
                          <div className="thumb-image">
                            <Image
                              lazyLoad={true}
                              data={allProductos[0].imagen.responsiveImage}
                            />
                          </div>
                      </Carousel>
                      </div>
                    <div style={{
                      display:'flex',
                    }}>
                      <Image
                        lazyLoad={true}
                        data={allProductos[0].imagen.responsiveImage}
                        style={{ 
                          width: "25" + "%",
                          margin:'3px'
                        }}
                      />
                      <Image
                        lazyLoad={true}
                        data={allProductos[0].imagen.responsiveImage}
                        style={{ 
                          width: "25" + "%", 
                          margin:'3px'
                        }}
                        
                      />
                    </div>
                    <span>hh</span>
                    <span>hh</span>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div  className="pt-5 pl-7 col-lg-6 single-right-left simpleCart_shelfItem">
                <h3>{allProductos[0].titulo}</h3>
                <p>
                  <span className="item_price">$650</span>
                  <del>$1,199</del>
                </p>
                <div className="rating1">
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
                <div className="description">
                  <h3>Breve Descripción</h3>
                  <h5>{allProductos[0].breveDescripcion} </h5>
                </div>
                <div className="description">
                  <h3>Categorias</h3>
                  {allProductos[0].categorias.map((categoria) => (
                    //poner link y linkear a categorias
                    <span key={categoria.id}>
                      <p>{categoria.categoria}</p>
                    </span>
                  ))}
                </div>
              </div>
              <div className="clearfix"></div>

              <div className="responsive_tabs">
                <div id="horizontalTab">
                  <div className="resp-tabs-container">
                    <div className="tab1">
                      <div className="single_page">
                        <h6>Descripción del Producto</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elPellentesque vehicula augue eget nisl ullamcorper,
                          molestie blandit ipsum auctor. Mauris volutpat augue
                          dolor.Consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut lab ore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco. labore et dolore magna aliqua.
                        </p>
                        <p className="para">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elPellentesque vehicula augue eget nisl ullamcorper,
                          molestie blandit ipsum auctor. Mauris volutpat augue
                          dolor.Consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut lab ore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco. labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="slider-img mid-sec mt-lg-5 mt-2 px-lg-5 px-3">
            <h3 className="tittle-w3layouts text-left my-lg-4 my-3">
              Featured Products
            </h3>
            <div className="mid-slider">
              <div className="owl-carousel owl-theme row">
                <div className="item">
                  <div className="gd-box-info text-center">
                    <div className="product-men women_two bot-gd">
                      <div className="product-googles-info slide-img googles">
                        <div className="men-pro-item">
                          <div className="men-thumb-item">
                            {/* <img
                              src="images/s5.jpg"
                              className="img-fluid"
                              alt=""
                            /> */}
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a
                                  href="single.html"
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
                                    <a href="single.html">Fastrack Aviator </a>
                                  </h4>
                                  <div className="grid-price mt-2">
                                    <span className="money">$325.00</span>
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
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="googles_item"
                                    value="Fastrack Aviator"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="325.00"
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
                            {/* <img
                              src="images/s6.jpg"
                              className="img-fluid"
                              alt=""
                            /> */}
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a
                                  href="single.html"
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
                                    <a href="single.html">MARTIN Aviator </a>
                                  </h4>
                                  <div className="grid-price mt-2">
                                    <span className="money">$425.00</span>
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
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="googles_item"
                                    value="MARTIN Aviator"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="425.00"
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
                            {/* <img
                              src="images/s7.jpg"
                              className="img-fluid"
                              alt=""
                            /> */}
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a
                                  href="single.html"
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
                                    <a href="single.html">Royal Son Aviator </a>
                                  </h4>
                                  <div className="grid-price mt-2">
                                    <span className="money">$425.00</span>
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
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="googles_item"
                                    value="Royal Son Aviator"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="425.00"
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
                            {/* <img
                              src="images/s8.jpg"
                              className="img-fluid"
                              alt=""
                            /> */}
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a
                                  href="single.html"
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
                                    <a href="single.html">Irayz Butterfly </a>
                                  </h4>
                                  <div className="grid-price mt-2">
                                    <span className="money">$281.00</span>
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
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="googles_item"
                                    value="Irayz Butterfly"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="281.00"
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
                            {/* <img
                              src="images/s9.jpg"
                              className="img-fluid"
                              alt=""
                            /> */}
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a
                                  href="single.html"
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
                                    <a href="single.html">Jerry Rectangular </a>
                                  </h4>
                                  <div className="grid-price mt-2">
                                    <span className="money">$525.00</span>
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
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="googles_item"
                                    value="Jerry Rectangular "
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="525.00"
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
                            {/* <img
                              src="images/s10.jpg"
                              className="img-fluid"
                              alt=""
                            /> */}
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a
                                  href="single.html"
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
                                    <a href="single.html">Herdy Wayfarer </a>
                                  </h4>
                                  <div className="grid-price mt-2">
                                    <span className="money">$325.00</span>
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
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="googles_item"
                                    value="Royal Son Aviator"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="425.00"
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
      </section>
    </div>
  );
};

export default Producto;