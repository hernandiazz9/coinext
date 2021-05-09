import React from 'react'
import Footer from './Footer'
import Headers from './Headers'

const Layout = ({children}) => {
    return (
        <div>
            <Headers/>
                {children}
            <Footer/>x
        </div>
    )
}

export default Layout
