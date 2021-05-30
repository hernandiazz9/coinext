import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="banner">
      <Carousel showThumbs={false}	dynamicHeight={true} infiniteLoop={true}>
        <div>
          {/* <img src={imagen.responsiveImage.src} alt="a" /> */}
          <img src={"/images/banner1.jpeg"} />
          <p>Instrumental Quirúrgico</p>
        </div>
        <div >
          <img 
            src={'/images/banner2.jpeg'}
          />
          <p>Instrumental Quirúrgico</p>
        </div>
        <div >
          <img 
            src={'/images/banner4.png'}
          />
          <p>Instrumental Quirúrgico</p>
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
             height:40vw
          }
          p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 6rem;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
