import Link from "next/link";
import { Image } from "react-datocms";
import MiniProduct from './MiniProduct'

const ProductosHome = ({ data: { allProductos } }) => {
  const seisProd = allProductos.slice(0, 6);
  return (
    <section className="  banner-bottom-wthreelayouts py-lg-5 py-3">
      <div className="container-fluid ">
        <div className=" container mx-auto inner-sec-shop px-lg-4 px-3">
          <h3 className="tittle-w3layouts text-center pb-4 my-lg-4 my-4">
            Algunos de Nuestros Productos{" "}
          </h3>
          

          <MiniProduct desde={false}  productos={seisProd} />

          <div className="row galsses-grids pt-lg-5 pt-3">
            <div className="col-lg-6 galsses-grid-left">
              <figure className="effect-lexi">
                {/* <img src="images/banner4.png" alt="" className="img-fluid" /> */}
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
      <style jsx>
        {`
         
        `}
      </style>
      {/* .efecto-zoom:hover .imgg {
            transform: scale(1.3);
            transform: scale(1.3);
            .efecto-zoom {
              overflow: hidden;
            }
          } */}
    </section>
  );
};

export default ProductosHome;
