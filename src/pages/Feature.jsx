import React from "react";

const Feature = () => {
  return (
    <section>
      <div className="container pt-5">
        <h1 className="myCenter">Features</h1>
        <h5 className="text-muted myCenter pb-4">Why TaraConnect over WhatsApp / Instagram DMs?</h5>
        <div className="row">
          <div className="col-md-3 steps  ">
            <img
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770643847/19873_cinmsn.jpg"
              alt=""
              width={300}
            />
            <small>Bulk Hiring</small>
          </div>
          <div className="col-md-3 steps  ">
            <img
             
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770643847/8454_npqw1u.jpg"
              alt=""
              width={300}
            />
            <small>Advanced Search & Filters</small>
          </div>
          <div className="col-md-3 steps  ">
            <img
               src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770643847/19873_cinmsn.jpg"
              alt=""
              width={300}
            />
            <small>Performance Analytics</small>
          </div>

          <div className="col-md-3 steps  ">
            <img
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770643846/6076473_wimi3o.jpg"
              alt=""
              width={300}
            />
            <small>Campaign Management</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
