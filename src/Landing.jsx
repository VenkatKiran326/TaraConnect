import React from "react";
import Footer from "./pages/Footer";
import HowitWorks from "./pages/howitWorks";
import Feature from "./pages/Feature";
import WhyUs from "./pages/WhyUs";
import  Hero from "./pages/Hero";
import HowitWorks from "./pages/HowitWorks";
import './styles/landing.css'


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
