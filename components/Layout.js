import React from 'react'
import Footer from './Footer'
import Headers from './Headers'

import { useQuerySubscription } from "react-datocms";




const Layout = ({children}) => {
    // const { data, error } = useSWR('/api/about', fetcher)
    const { data } = useQuerySubscription({
        enabled: true,
        query: FOOTER_QUERY,
        // variables: { first: 10 },
        token: "63a093965238a42361bb30b71d23ca",
      });
      // console.log(data, "status, error, data ");
    


    return (
        <div>
            <Headers data={data}/>
                {children}
            <Footer data={data}/>
        </div>
    )
}

export default Layout
const FOOTER_QUERY = `
{
  contacto {
    email
    telefono
    direccion
  }
  allPaginas {
    sobrenosotroschico
  }
}


`;
