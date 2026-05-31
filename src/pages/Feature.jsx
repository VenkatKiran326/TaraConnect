import React from "react";

const features = [
  {
    title: "Bulk Hiring",
    image:
      "https://res.cloudinary.com/dwad4li0t/image/upload/v1770643847/19873_cinmsn.jpg",
    desc: "Hire multiple influencers for campaigns with a single workflow."
  },
  {
    title: "Advanced Search & Filters",
    image:
      "https://res.cloudinary.com/dwad4li0t/image/upload/v1770643847/8454_npqw1u.jpg",
    desc: "Find the perfect influencers based on niche, audience, and reach."
  },
  {
    title: "Performance Analytics",
    image:
      "https://res.cloudinary.com/dwad4li0t/image/upload/v1770643847/19873_cinmsn.jpg",
    desc: "Track campaign results and influencer performance in real time."
  },
  {
    title: "Campaign Management",
    image:
      "https://res.cloudinary.com/dwad4li0t/image/upload/v1770643846/6076473_wimi3o.jpg",
    desc: "Manage collaborations from invitation to campaign completion."
  }
];

const Feature = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Features</h2>
          <p className="text-muted">
            Why choose TaraConnect over WhatsApp or Instagram DMs?
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="feature-card h-100">

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="img-fluid rounded-4 mb-3 feature-img"
                />

                <h5 className="fw-bold">
                  {feature.title}
                </h5>

                <p className="text-muted mb-0">
                  {feature.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feature;