import Link from "next/link";
import { Image } from "react-datocms";

const ProductHome = ({ productos, desde }) => {
  // console.log(productos);
  return (
    <div
      className={desde ? "contenedor-cards-productos" : "contenedor-cards-home"}
    >
      {productos.map((producto) => (
        <Link key={producto.id} href={`productos/${producto.slug}`}>
          <div className="card">
            <div className="imagen-card">
              <Image
                style={{ borderRadius: "8px" }}
                lazyLoad={true}
                data={producto.imagen.responsiveImage}
              />
            </div>
            <div className="contenido">
              <h3 className="titulo">{producto.titulo}</h3>
              <p className="breve-descripcion">{producto.breveDescripcion}</p>
              {desde&&producto.categorias.map(categoria=>(
                <span key={categoria.id} className="categorias">{categoria.categoria}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductHome;
