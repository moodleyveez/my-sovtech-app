import React from 'react'
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import About from './AboutComponent';
import Home from './HomeComponent';



function Main () { 
    return(
        <React.Fragment>
        <Header></Header>
        <About/>
        <Home/>
        <Footer></Footer>
        </React.Fragment>
    )
    
}

export default Main;