import { useState } from 'react';
import { request } from '../pages/api/datocms';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { buildClient } from '@datocms/cma-client-browser';

const client = buildClient({
  apiToken: '63a093965238a42361bb30b71d23ca',
  extraHeaders: {
    Authorization: 'Bearer 63a093965238a42361bb30b71d23ca',
    Accept: 'application/json',
    'X-Api-Version': 3,
  },
});

export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY,
    // variables:{cuantosQuiero, desdeDonde }
  });
  return { props: { data } };
}

const about = ({ data: { allPaginas } }) => {
  // const records = client.items.list();
  // console.log(records, 'records');

  const { imagen, sobrenosotrosgrande } = allPaginas[0];

  return allPaginas ? (
    <section className='banner-bottom-wthreelayouts py-lg-5 py-3'>
      <div className='container-fluid'>
        <div className='inner-sec-shop px-lg-4 px-3'>
          <div className='about-content py-lg-5 py-3'>
            <div className='row'>
              <div className='col-lg-6 p-0'>
                <Image lazyLoad={true} data={imagen.responsiveImage} />
              </div>
              <div className='col-lg-6 about-info'>
                <h3 className='tittle-w3layouts text-left mb-lg-5 mb-3'>
                  Sobre Nosotros
                </h3>
                <p className='my-xl-4 my-lg-3 my-md-4 my-3'>
                  {sobrenosotrosgrande}
                </p>
                <Link
                  href='/productos'
                  className='btn btn-sm animated-button gibson-three mt-4'
                >
                  Nuestros Productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>{/* <TryingUploadImg /> */}</div>
    </section>
  ) : (
    'cargando...'
  );
};

export default about;

const ABOUT_QUERY = `
{
  allPaginas(filter: {slug: {eq: "nosotros"}}) {
    titulo
    imagen {
      responsiveImage {
        src
        srcSet
        height
        width
        sizes
        webpSrcSet
      }
    }
    slug
    sobrenosotrosgrande
  }
}




`;
