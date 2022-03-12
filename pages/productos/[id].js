// import { useRouter } from "next/router";
import { request } from "../../pages/api/datocms";
import { Image } from "react-datocms";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
// import { async } from "regenerator-runtime";
// import Head from "next/head";
// import Head from '../../public/css/bootstrap.css'

const SINGLE_PRODUCT_QUERY = `
query ($slug: String!) {
  allProductos(filter: {slug: {eq: $slug}}) {
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
      responsiveImage {
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
}

`;
const SINGLE_PRODUCT_QUERY_PATHS = `
query  {
    allProductos {
      slug
    }
  }  
`;
// query para obtener todos los paths

export const getStaticPaths = async () => {
  const res = await request({
    query: SINGLE_PRODUCT_QUERY_PATHS,
  });
  const paths = await res.allProductos.map((producto) => {
    return {
      params: { id: producto.slug },
    };
  });
  return { paths, fallback: false };
};
//query producto con x paths antes obtenido
export const getStaticProps = async (context) => {
  const slug = await context.params.id;
  const data = await request({
    query: SINGLE_PRODUCT_QUERY,
    variables: { slug },
  });
  return { props: { data } };
};
const Producto = ({ data }) => {
  if (!data) return null;
  const { allProductos } = data;
  const {
    imagen,
    breveDescripcion,
    titulo,
    categorias,
    queEs,
  } = allProductos[0];

  const renderCustomThumbs = () => {
    return [
      <picture key="01">
        <source
          data-srcset={imagen && imagen.responsiveImage.src}
          type="image/jpg"
        />
        <img
          key="01"
          src={imagen && imagen.responsiveImage.src}
          alt="First Thumbnail"
          height="70"
        />
      </picture>,
      <picture key="02">
        <source
          data-srcset={imagen && imagen.responsiveImage.src}
          type="image/jpg"
        />
        <img
          key="02"
          src={imagen && imagen.responsiveImage.src}
          alt="Second Thumbnail"
          height="70"
        />
      </picture>,
      <picture key="03">
        <source
          data-srcset={imagen && imagen.responsiveImage.src}
          type="image/jpg"
        />
        <img
          key="03"
          src={imagen && imagen.responsiveImage.src}
          alt="Third Thumbnail"
          height="70"
        />
      </picture>,
    ];
  };

  return (
    <section className="banner-bottom-wthreelayouts  py-lg-5 py-3">
      <div className="container">
        <div className="inner-sec-shop pt-lg-4 pt-3 ">
          <div className="row">
            <div className="col-lg-5 single-right-left ">
              <div className="grid  images_3_of_2">
                <div className="flexslider1">
                  <div className="slides">
                    <Carousel
                      infiniteLoop={true}
                      renderThumbs={renderCustomThumbs}
                    >
                      <div className="thumb-image">
                        {/* <img src={imagen.responsiveImage.src} alt="a" /> */}

                        <Image lazyLoad={true} data={imagen.responsiveImage} />
                      </div>
                      <div className="thumb-image">
                        <Image lazyLoad={true} data={imagen.responsiveImage} />
                      </div>
                      <div className="thumb-image">
                        <Image lazyLoad={true} data={imagen.responsiveImage} />
                      </div>
                    </Carousel>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="pt-5 pl-7  col-lg-6 single-right-left simpleCart_shelfItem">
              <div className="pt-5 sticky-category">
                <h1>{titulo && titulo}</h1>
                <div className="description">
                  <p className="breve">
                    {breveDescripcion && breveDescripcion}
                  </p>
                  <p className="breve"> {queEs && queEs} </p>
                </div>
                <div className="description">
                  <h4>Categorias</h4>
                  <div className="categorias">
                    {categorias &&
                      categorias.map((categoria) => (
                        <Link
                          key={categoria.id}
                          href={`/productos?categoria=${categoria.id}`}
                        >
                          <span key={categoria.id}>{categoria.categoria}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>

            {/* <div className="responsive_tabs">
              <div id="horizontalTab">
                <div className="resp-tabs-container">
                  <div className="tab1">
                    <div className="single_page">
                      <h6>Descripción del Producto</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elPellentesque vehicula augue eget nisl ullamcorper,
                        molestie blandit ipsum auctor. Mauris volutpat augue
                        dolor.Consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut lab ore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco.
                        labore et dolore magna aliqua.
                      </p>
                      <p className="para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elPellentesque vehicula augue eget nisl ullamcorper,
                        molestie blandit ipsum auctor. Mauris volutpat augue
                        dolor.Consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut lab ore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco.
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Producto;
