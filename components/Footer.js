import Link from "next/link";

const Footer = ({ data }) => {
  return data ? (
    <footer className="py-lg-5 py-3">
      <div className="container-fluid px-lg-5 px-3">
        <div className="row footer-top-w3layouts">
          <div className="col-lg-4 text-center footer-grid-w3ls">
            <div className="footer-title">
              <h3>Quienes Somos</h3>
            </div>
            <div className="footer-text">
              <h5
                style={{
                  color: "white",
                  paddingBottom: "1.7rem",
                }}
              >
                Cirugía Ósea Instrumental
              </h5>
              <p>{data.allPaginas[0].sobrenosotroschico}</p>
              <ul className="footer-social text-left mt-lg-4 mt-3">
                <li className="mx-2">
                  <a target="_blank" href="https://www.facebook.com/COIcirugiaoseaintrumental">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                {/* <li className="mx-2">
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li> */}
                {/* <li className="mx-2">
                  <a href="#">
                    <span className="fab fa-google-plus-g"></span>
                  </a>
                </li> */}
                <li className="mx-2">
                  <a target="_blank" href="https://www.instagram.com/cirugiaoseainstrumental/?hl=en">
                    <span className="fab fa-instagram"></span>
                  </a>
                  
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-4 text-center footer-grid-w3ls">
            <div className="footer-title">
              <h3>Contáctanos </h3>
            </div>
            <div className="contact-info">
              <h4>Direccion:</h4>
              <p>{data.contacto.direccion}</p>
              <div className="phone">
                <h4>Contacto:</h4>
                <p>Phone:{data.contacto.telefono} </p>
                <p>Email: {data.contacto.email}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center footer-grid-w3ls">
            <div className="footer-title">
              <h3>Menu</h3>
            </div>
            <ul className="links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">Nosotros</Link>
              </li>
              <li>
                <Link href="/productos">Productos</Link>
              </li>

              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-w3layouts mt-4">
          <p className="copy-right text-center ">
            &copy; 1985 Instrumental Quirúrgico. Todos los derechos reservados |
            Diseñado por
            <a href='https://hddev.netlify.app/'> {"< HDev /> "}</a>
          </p>
        </div>
      </div>
    </footer>
  ) : (
    "cargando..."
  );
};
export default Footer;
