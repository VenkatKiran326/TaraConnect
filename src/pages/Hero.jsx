import React from "react";
import { Button } from "react-bootstrap";
import "../pages/hero.css";

const Hero = () => {
  
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Left Content */}
          <div className="col-lg-6">
            <span className="hero-badge">
              🚀 India's Influencer Collaboration Platform
            </span>

            <h1 className="hero-title">
              Connecting Brands with
              <span className="text-gradient"> Trusted Influencers</span>
            </h1>

            <p className="hero-description">
              TaraConnect helps brands discover trusted influencers and
              enables creators to monetize their audience through
              transparent and meaningful collaborations.
            </p>

            <div className="hero-buttons">
              <Button className="primaryBtn">
                Join as Brand
              </Button>

              <Button className="secondaryBtn">
                Join as Influencer
              </Button>
            </div>

            <div className="hero-stats">
              <div>
                <h3>500+</h3>
                <p>Influencers</p>
              </div>

              <div>
                <h3>120+</h3>
                <p>Brands</p>
              </div>

              <div>
                <h3>1000+</h3>
                <p>Campaigns</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770639234/blogger-streaming-online-fashion-isometric-illustration_ogrw3r.png"
              alt="TaraConnect"
              className="img-fluid hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;