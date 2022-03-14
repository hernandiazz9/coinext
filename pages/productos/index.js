import { useState, useEffect } from "react";
import { request } from "../api/datocms";
import GoToTop from "../../components/GoToTop";
import MiniProduct from "../../components/MiniProduct";
import { useRouter } from "next/router";

// export async function getStaticProps() {
//   const data = await request({
//     query: PRODUCT_QUERY,
//     // variables:{cuantosQuiero, desdeDonde }
//   });
//   return { props: { data }, revalidate:10 };
// }
export async function getServerSideProps() {
  const data = await request({
    query: PRODUCT_QUERY,
    // variables:{cuantosQuiero, desdeDonde }
  });
  return { props: { data } };
}
///---------------------------------------------
const index = ({ data: { allProductos, allCategoriaxes } }) => {
  console.log(allProductos);
  const router = useRouter();
  const [productosTodos, setproductosTodos] = useState([]);
  const [hastaDonde, setHastaDonde] = useState(9);
  const [checked, setChecked] = useState("todos");

  const nextProductos = () => {
    const num = hastaDonde + 9;
    setHastaDonde((hastaDonde) => hastaDonde + 9);
    setproductosTodos(allProductos.slice(0, num));
  };

  useEffect(() => {
    if (productosTodos.length === 0) {
      setproductosTodos(allProductos.slice(0, hastaDonde));
    }
    if (router.query.categoria) {
      handleRadio(router.query.categoria);
    }
  }, []);
  //script para filtrar productos.
  const handleRadio = (categoId) => {
    setChecked(categoId);
    if (categoId === "todos") {
      return setproductosTodos(allProductos.slice(0, hastaDonde));
    }
    const filtrados = allProductos.filter((producto) => {
      const categoriasId = producto.categorias.map((cate) => {
        return cate.id;
      });
      return categoriasId.includes(categoId);
    });
    setproductosTodos(filtrados);
  };
  const handleSearch = (e) => {
    const filtrados = allProductos.filter((producto) => {
      const words =
        producto.titulo.toLowerCase() +
        producto.queEs.toLowerCase() +
        producto.breveDescripcion.toLowerCase();
      return words.indexOf(e.target.value.toLowerCase()) !== -1;
    });
    console.log(filtrados);
    setproductosTodos(filtrados);
  };

  // const buscar = (e) => {};

  return (
    <div className="container ">
      <div className="row ">
        <div className=" col-lg-3">
          <div className="side-bar sticky-category ">
            <div className="search-hotel">
              <h3 className="agileits-sear-head">Busca tu Producto</h3>
              <form>
                <input
                  className="form-control"
                  type="search"
                  name="search"
                  placeholder="Buscar..."
                  onChange={handleSearch}
                  required
                />
                {/* <button type="button" onClick={() => buscar()} className="btn1">
                  <i className="fas fa-search"></i>
                </button> */}
                <div className="clearfix"> </div>
              </form>
            </div>
            {/* categorias */}
            <div className="range left-side">
              <h3 className="agileits-sear-head">Categorías</h3>
              <ul>
                <li>
                  <input
                    type="radio"
                    value="todos"
                    id="todos"
                    name="categorias"
                    checked={checked === "todos"}
                    onChange={(e) => handleRadio(e.target.id)}
                    className="checked"
                  />
                  <label htmlFor="todos" className="span">
                    Todos
                  </label>
                </li>
                {allCategoriaxes.map((categoria) => (
                  <li key={categoria.id}>
                    <input
                      type="radio"
                      value={categoria.categoria}
                      checked={checked === categoria.id}
                      id={categoria.id}
                      name="categorias"
                      onChange={(e) => handleRadio(e.target.id)}
                      className="checked"
                    />
                    <label htmlFor={categoria.id} className="span">
                      {categoria.categoria}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* PRODUCTOS */}
        <MiniProduct desde={true} productos={productosTodos} />
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4">
        <button
          type="button"
          onClick={() => nextProductos(hastaDonde)}
          className="btn btn-secondary"
        >
          <span>Mostrar mas</span>
        </button>
      </div>
      <GoToTop ruta="/productos" />
    </div>
  );
};

export default index;

const PRODUCT_QUERY = `
{
  allProductos {
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
      responsiveImage(imgixParams: {fit: crop, w: 300, h: 450}) {
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
  allCategoriaxes {
    id
    categoria
  }
}


`;
