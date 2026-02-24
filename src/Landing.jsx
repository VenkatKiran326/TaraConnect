import React from "react";
import Footer from "./pages/Footer";
import HowitWorks from "./pages/howitWorks";
import Feature from "./pages/Feature";
import WhyUs from "./pages/WhyUs";
import Brands from "./pages/Brands";

import  Hero from "./pages/Hero";

function Landing(){
    return(
        <>
        <Hero/>
        <HowitWorks/>
        <Feature/>
        <WhyUs/>
        </>
    )
}
export default Landing