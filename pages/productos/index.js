import { useState } from "react";
import { request } from "../api/datocms";
import Link from "next/link";
import { Image } from "react-datocms";
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
  return { props: { data }};
  
}
///---------------------------------------------
const index = ({ data: { allProductos, allCategoriaxes } }) => {
  // console.log(allProductos);
  const [productosTodos, setproductosTodos] = useState([]);
  const [hastaDonde, setHastaDonde] = useState(9);
  const [checked, setChecked] = useState("");

  if (productosTodos.length === 0) {
    setproductosTodos(allProductos.slice(0, hastaDonde));
  }
  const nextProductos = () => {
    const num = hastaDonde + 9;
    setHastaDonde((hastaDonde) => hastaDonde + 9);
    setproductosTodos(allProductos.slice(0, num));
  };

  //scrip para filtrar productos.
  const click = (categoClick, categoId) => {
    if (checked === categoClick) {
      setChecked("");
      setproductosTodos(allProductos.slice(0, hastaDonde));
    } else {
      const filtrados = allProductos.filter((producto) => {
        const categoria = producto.categorias.map((cate) => {
          return cate.categoria;
        });
        return categoria.includes(categoClick);
      });
      console.log(filtrados);
      setproductosTodos(filtrados);
      setChecked(categoClick);
    }
  };
  const router = useRouter();
  const buscar = (e) => {
    console.log(router.query.search, "1");

    console.log(router.query.search);
    click(router.query.search);
  };

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
                  required=""
                />
                <button type="button" onClick={() => buscar()} className="btn1">
                  <i className="fas fa-search"></i>
                </button>
                <div className="clearfix"> </div>
              </form>
            </div>
            {/* <!-- price range --> */}
            <div className="range left-side">
              <h3 className="agileits-sear-head">Categorías</h3>
              <ul>
                {allCategoriaxes.map((categoria) => (
                  <li key={categoria.id}>
                    <input
                      type="checkbox"
                      onClick={() => click(categoria.categoria, categoria.id)}
                      className="checked"
                    />
                    <span className="span">{categoria.categoria}</span>
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
