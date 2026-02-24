import React from "react";

import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ErrorBoundary from "./pages/ErrorBoundary";
import Landing from "./Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar";
import Brands from "./pages/Brands";
import Footer from "./pages/Footer";
import Influencers from "./pages/Influencers";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import BrandDashboard from "./pages/BrandDashboard";
import InfluncerDashboard from "./pages/InfluncerDashboard";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
     <Navbar/>
        <ErrorBoundary>
               <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/brands"  element={<Brands/>}/>
            <Route path="/influencers" element={<Influencers/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/branddashboard" element={<BrandDashboard/>}/>
            <Route path="/influencerdashboard" element={<InfluncerDashboard/>}/>

          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
