import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
// https://www.npmjs.com/package/react-responsive-carousel
const Banner = () => {
  return (
    <div className="banner">
      <Carousel
        autoPlay={true}
        stopOnHover={false}
        interval={5000}
        showThumbs={false}
        dynamicHeight={true}
        infiniteLoop={true}
      >
        <div>
          <img src={"/images/banner1.jpeg"} />
          <p>Fabricacion de Instrumental Quirúrgico</p>
        </div>
        <div>
          <img src={"/images/banner2.jpeg"} />
          <p>Más de 20 años de experiencia</p>
        </div>
        <div>
          <img src={"/images/banner4.png"} />
          <p>Estamos en Córdoba, consultanos por envíos</p>
        </div>
      </Carousel>
      <style jsx>
        {`
          div {
            position: relative;
            text-align: center;
          }
          img {
            filter: brightness(50%);
            height: 40vw;
          }
          p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 4rem;
            font-weight: bold;

          }
          @media (max-width: 964px) {
            p {
              font-size: 2.5rem;
            }
          }
          @media (max-width: 500px) {
            p {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
