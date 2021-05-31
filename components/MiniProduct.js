import Link from "next/link";
import { Image } from "react-datocms";


const ProductHome = ({ productos, desde }) => {

  return (
    <div className={desde?"contenedor-cards-productos":'contenedor-cards-home'}>
      {productos.map((producto) => (
        <Link key={producto.id} href={`productos/${producto.slug}`}>
          <div   className="card">
            <div className="imagen-card">
              <Image lazyLoad={true} data={producto.imagen.responsiveImage} />
            </div>
            <div className="contenido">
              <h3 className="titulo">{producto.titulo}</h3>
              <p className="breve-descripcion">
                {producto.breveDescripcion}
              </p>
            </div>
          </div>
        </Link>
        
      ))}
      <style jsx>
        {`
          .contenedor-cards-home  {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            grid-gap: 3rem;

          }
          .contenedor-cards-productos {
            max-width: 900px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2rem;

          }
          .card {
            border: 2px solid rgba(204, 204, 204, 0.43);
            transition: ease-in-out 100ms;
          }
          .card:hover {
            cursor: pointer;
            transform: scale(1.04);
            z-index: 1;
            -webkit-box-shadow: 0px 10px 13px -7px #000000,
              5px 5px 24px 6px rgba(0, 0, 0, 0),
              5px 5px 24px 6px rgba(0, 0, 0, 0);
            box-shadow: 0px 10px 13px -7px #000000,
              5px 5px 24px 6px rgba(0, 0, 0, 0),
              5px 5px 24px 6px rgba(0, 0, 0, 0);
          }
          .card:active{
            transform: scale(1);
            -webkit-box-shadow: 0px 10px 40px -7px #000000,
              5px 5px 24px 6px rgba(0, 0, 0, 0),
              5px 5px 24px 6px rgba(0, 0, 0, 0);
            box-shadow: 0px 10px 13px -7px #000000,
              5px 5px 24px 6px rgba(0, 0, 0, 0),
          }
          .imagen-card {
            padding: 1rem;
            transition: ease-out 300ms;
          }
          .card:hover .imagen-card {
            padding-top: 0.5rem;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
            border-radius: 5px;
            overflow: hidden;
          }
          .contenido {
            padding: 1rem;
            transition: ease-out 300ms;
          }
          .contenido h3{
            font-size:1.2rem;
          }
          .card:hover .contenido h3 {
            font-weight: bold;

          }
          .card:hover .contenido {
            padding: 0rem 1rem;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default ProductHome;
