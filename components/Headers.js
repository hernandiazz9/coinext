import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Headers = ({ data }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  console.log(router.pathname, "router");

  return (
    <header>
      <div className="row">
        <div className="col-md-3 top-info text-left mt-lg-4">
          <h6>Comunicate!</h6>
          <ul>
            <li>
              <i className="fas fa-phone">-</i>
            </li>
            <li className="number-phone mt-3"> {data&&data.contacto.telefono}</li>
          </ul>
        </div>
        <div className="col-md-6 logo-w3layouts text-center">
          <h1 className="logo-w3layouts">
            <span className="navbar-brand">
              <Link href="/">instrumental</Link>
            </span>
          </h1>
        </div>
        <div className="col-md-3 top-info-cart text-right mt-lg-4">
          <ul className="cart-inner-info">
            <li className="galssescart galssescart2 cart cart box_1">
              <button className="top_googles_cart">
                <Link href="/productos">
                  <i className="fas fa-cart-arrow-down"></i>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="search">
        <div className="mobile-nav-button">
          <button id="trigger-overlay" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="overlay overlay-door">
          <button type="button" className="overlay-close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <form action="#" method="post" className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search here..."
              required=""
            />
            <button type="submit" className="btn btn-primary submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <label className="top-log mx-auto"></label>
      <nav className="navbar  navbar-expand-lg navbar-light bg-light top-header mb-2">
        <button
          onClick={() => setOpen((open) => !open)}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            open ? "" : "collapse"
          } sticky-category navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav-mega mx-auto">
            <li className="nav-item ">
              <Link href="/">
                <span
                  className={
                    router.pathname === "/" ? "nav-link  active" : "nav-link "
                  }
                >
                  Home
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about">
                <span
                  className={
                    router.pathname === "/about"
                      ? "nav-link  active"
                      : "nav-link "
                  }
                >
                  Nosotros
                </span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link href="/productos">
                <span
                  className={
                    router.pathname === "/productos"
                      ? "nav-link  active"
                      : "nav-link "
                  }
                >
                  Productos
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contacto">
                <span
                  className={
                    router.pathname === "/contacto"
                      ? "nav-link  active"
                      : "nav-link "
                  }
                >
                  Contacto
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
