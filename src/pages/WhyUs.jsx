import React from "react";
import { Link } from "react-router-dom";

const WhyUs = () => {
  const benefits = [
    "Centralized Collaboration Hub",
    "Saves Time & Effort",
    "Trust & Transparency",
    "Data-Driven Influencer Selection"
  ];

  const brands = [
    {
      name: "Tata",
      logo:
        "https://images.seeklogo.com/logo-png/13/1/tata-logo-png_seeklogo-135878.png"
    },
    {
      name: "Ajio",
      logo:
        "https://images.seeklogo.com/logo-png/34/1/ajio-logo-png_seeklogo-348946.png"
    },
    {
      name: "Kalyan Jewellers",
      logo:
        "https://images.seeklogo.com/logo-png/23/1/kalyan-jewellers-logo-png_seeklogo-238783.png"
    }
  ];

  return (
    <section className="py-5">

      <div className="container">

        {/* WHY US */}

        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <img
              src="https://www.bitsathy.ac.in/wp-content/uploads/Marketing-1-768x732.jpg"
              alt="Why TaraConnect"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          <div className="col-lg-6">

            <h2 className="fw-bold mb-4">
              Why TaraConnect?
            </h2>

            {benefits.map((item, index) => (
              <div
                key={index}
                className="benefit-card mb-3"
              >
                ✅ {item}
              </div>
            ))}

          </div>

        </div>

        {/* BRANDS */}

        <div className="text-center mt-5 pt-5">

          <h2 className="fw-bold">
            Trusted Brand Partners
          </h2>

          <p className="text-muted">
            Brands growing through influencer collaborations
          </p>

          <div className="row g-4 mt-3">

            {brands.map((brand, index) => (
              <div className="col-md-4" key={index}>

                <div className="partner-card h-100">

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    width="100"
                    className="mb-3"
                  />

                  <h5>{brand.name}</h5>

                  <p className="text-muted">
                    Trusted partner using TaraConnect campaigns.
                  </p>

                </div>

              </div>
            ))}

          </div>

          <Link
            to="/brands"
            className="btn btn-outline-success mt-4"
          >
            View All Brands
          </Link>

        </div>

      </div>

    </section>
  );
};

export default WhyUs;