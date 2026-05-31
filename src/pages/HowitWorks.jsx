import React from "react";
import './howitworks.css'
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Profile",
      description:
        "Create your brand or influencer profile and showcase your strengths."
    },
    {
      number: "02",
      title: "Discover & Connect",
      description:
        "Search, filter, and connect with the perfect collaboration match."
    },
    {
      number: "03",
      title: "Collaborate & Grow",
      description:
        "Launch campaigns, track performance, and grow together."
    }
  ];
  

  return (
    <section className="how-it-works py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">How TaraConnect Works</h2>
          <p className="section-subtitle">
            Start collaborating in just 3 simple steps
          </p>
        </div>

        <div className="row g-4">
          {steps.map((step) => (
            <div className="col-lg-4 col-md-6" key={step.number}>
              <div className="step-card h-100">

                <div className="step-number">
                  {step.number}
                </div>

                <h3 className="step-title">
                  {step.title}
                </h3>

                <p className="step-description">
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;