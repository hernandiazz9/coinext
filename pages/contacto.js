import { useState } from "react";
import { request } from "../pages/api/datocms";
import Link from "next/link";
import { Image } from "react-datocms";
export async function getStaticProps() {
  const data = await request({
    query: CONTACT_QUERY,
    // variables:{cuantosQuiero, desdeDonde }
  });
  return { props: { data } };
}

const contacto = ({ data: { contacto } }) => {
  // console.log(contacto, "contact");
  return contacto ? (
    <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
      <div className="container">
        <h3 className="tittle-w3layouts text-center my-lg-4 my-4">Contacto</h3>
        <div className="inner_sec">
          <p className="sub text-center mb-lg-5 mb-3">
            Nos Encanta oir tus IDEAS
          </p>
          <div className="address row">
            <div className="col-lg-4 address-grid">
              <div className="row address-info">
                <div className="col-md-3 address-left text-center">
                  <i className="far fa-map"></i>
                </div>
                <div className="col-md-9 address-right text-left">
                  <h6>Dirección</h6>
                  <p> {contacto.direccion}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 address-grid">
              <div className="row address-info">
                <div className="col-md-3 address-left text-center">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="col-md-9 address-right text-left">
                  <h6>Email</h6>
                  <p>
                    {contacto.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 address-grid">
              <div className="row address-info">
                <div className="col-md-3 address-left text-center">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="col-md-9 address-right text-left">
                  <h6>Telefono</h6>
                  <p>{contacto.telefono}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_grid_right">
            <form action="#" method="post">
              <div className="row contact_left_grid">
                <div className="col-md-6 con-left">
                  <div className="form-group">
                    <label className="my-2">Nombre</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Name"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="Email"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="my-2">Telefono</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Subject"
                      placeholder=""
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6 con-right">
                  <div className="form-group">
                    <label>Mensaje</label>
                    <textarea
                      id="textarea"
                      placeholder=""
                      required=""
                    ></textarea>
                  </div>
                  <input
                    className="form-control"
                    type="submit"
                    value="Enviar"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  ) : (
    "cargando.."
  );
};

export default contacto;
const CONTACT_QUERY = `
{
	contacto {
	  direccion
	  email
	  telefono
	}
  }
  

`;
