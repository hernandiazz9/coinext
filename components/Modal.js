import { useRouter } from "next/router";

const Modal = ({ rta, validForm }) => {
  const router = useRouter();
  console.log(validForm);
  return (
    <>
      <input
        type="submit"
        className="form-control"
        data-bs-toggle={validForm && "modal"}
        data-bs-target={"#exampleModal"}
        value="Enviar"
      />

      <div
        className="modal fade"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Mensaje
              </h5>
            </div>
            <div className=" m-5 modal-body">
              {rta === "OK"
                ? `Mensaje enviado con exito
                  Nos pondremos en contacto con tigo a la brevedad.
                `
                : "Hubo un error por favor vuelva a intentarlo..."}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
              <button
                data-bs-dismiss="modal"
                type="button"
                onClick={() => router.push("/productos")}
                className="btn btn-outline-secondary"
              >
                Volver a roductos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
