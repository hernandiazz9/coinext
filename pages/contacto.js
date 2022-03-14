import { useState, useRef, useEffect } from "react";
import { request } from "../pages/api/datocms";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";

export async function getStaticProps() {
  const data = await request({
    query: CONTACT_QUERY,
    // variables:{cuantosQuiero, desdeDonde }
  });
  return { props: { data } };
}

const contacto = ({ data: { contacto } }) => {
  const [rta, setRta] = useState("");
  const formRef = useRef();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numero: "",
    message: "",
  });

  useEffect(() => {
    if (
      formData.email.trim() !== "" &&
      formData.name.trim() !== "" &&
      formData.numero.trim() !== "" &&
      formData.message.trim() !== ""
    ) {
      setValidForm(true);
    }
  }, [formData]);

  const handleFormChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formRef.current.name.value.trim() !== "" ||
      formRef.current.email.value.trim() !== "" ||
      formRef.current.numero.value.trim() !== "" ||
      formRef.current.message.value.trim() !== ""
    ) {
      console.log("enviado");
      emailjs
        .sendForm(
          "service_2715p09",
          "template_n36ax9s",
          formRef.current,
          "user_A2WeTf5ce49gG0fU3X3aY"
        )
        .then(
          (result) => {
            setRta(result.text);
          },
          (error) => {
            setRta(error.text);
          }
        );
      setFormData({ name: "", email: "", numero: "", message: "" });
      setValidForm(false);
    }
  };
  return contacto ? (
    <>
      <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
        <div className="container">
          <h3 className="tittle-w3layouts text-center my-lg-4 my-4">
            Contacto
          </h3>
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
                    <p>{contacto.email}</p>
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
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row contact_left_grid">
                  <div className="col-md-6 con-left">
                    <div className="form-group">
                      <label htmlFor="name" className="my-2">
                        Nombre
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        id="email"
                        onChange={handleFormChange}
                        placeholder="Tu email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="numero" className="my-2">
                        Telefono
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="numero"
                        value={formData.numero}
                        id="numero"
                        onChange={handleFormChange}
                        placeholder="Tu telefono"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 con-right">
                    <div className="form-group">
                      <label htmlFor="textarea">Mensaje</label>
                      <textarea
                        name="message"
                        id="textarea"
                        onChange={handleFormChange}
                        value={formData.message}
                        placeholder="Tu mensaje"
                        required
                      ></textarea>
                    </div>
                    <Modal validForm={validForm} rta={rta} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
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
