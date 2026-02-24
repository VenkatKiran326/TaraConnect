import React, { useEffect, useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Brands = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/brands")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="container ">
        <div className="row vh-100">
          
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className=" ">
              <h1>Find Trusted Brands to Collaborate With</h1>
              <p className="text-muted">
                Discover verified brands across multiple categories that are
                actively seeking influencers for meaningful collaborations.
              </p>
            </div>
            <div className="d-flex">
              <div style={{ display: "block", width: 700, padding: 10 }}>
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>SignUp as Brand</Tooltip>
                  )}
                  placement="bottom"
                >
                  <Button variant="warning" className="btn m-2 primaryBtn">
                    Brand
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>SignUp as Influencers</Tooltip>
                  )}
                  placement="bottom"
                >
                  <Button variant="warning" className="btn secondaryBtn">
                    Influencers
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770206067/5476534_hy34ln.jpg"
              alt="" width={700}
            />
          </div>
          {/* </div> */}
        </div>

        <div className="row">
          <h3  className='myCenter p-4'>Select Brand by Categories</h3>
         <ul className="d-flex  ">
            <li className=" m-4 secondaryBtn"> Fashion & Apparel</li>

            <li className=" m-4 secondaryBtn">Beauty & Skincare</li>

            <li className=" m-4 secondaryBtn">Food & Beverages</li>

            <li className=" m-4 secondaryBtn">Tech & Gadgets</li>

            <li className=" m-4 secondaryBtn">Health & Fitness</li>

            <li className=" m-4 secondaryBtn">Lifestyle & Travel</li>

            <li className="ms-auto">
              <form className="d-flex" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="primaryBtn" type="button">
                  Search
                </button>
              </form>
            </li>
          </ul>

          <div className="cards ">
            <div className="row">
              {data.slice(0, 5).map((item) => (
                <div className="col-md-4 steps myCard">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        key={item.id}
                        src={item.profilePic}
                        alt=""
                        width={100}
                      />
                    </div>
                    <div className="col-md-7">
                      <h3 className="mb-0">{item.name}</h3>
                      <small style={{ color: "var(--secondary)" }}>
                        {" "}
                        {item.category}
                      </small>
                     
                    
                     
                    </div>
                  </div>

                  <div className="row">
                   
                    <div className="icon">
                      <p>{item.description}</p>
                     <div className="d-flex">
                <div>
                  <p>Type : {item.type}</p>
                  <p>Status sss: {item.verified}</p>
                </div>
                <div className="px-5 ">
               
                 
                </div>
              </div>
                    </div>
                    

                    <div className="p-4 ms-4">
                      <button className="primaryBtn">View Profile</button>
                      <button className="secondaryBtn">
                        Share Interest
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div>
            <h3  className='myCenter p-4'>Why choose us?</h3>
            <ul>
              <li>Trusted Brands Badge (Build Trust)</li>
              <li> ✅ Verified</li>
              <li>⭐ Trusted Brand</li>
            </ul>
          </div>
        </div>

       

        <div className="row ">
          <div className="bg-black p-5 text-white">
            <h1  className='myCenter '>Why This Platform Helps Influencers</h1>
            <p className="text-mutex myCenter ">Why Collaborate Through TaraConnect?</p>

            <ul>
              <li> Work with verified & trusted brands</li>

              <li> Find brands actively looking for influencers</li>

              <li> No cold DMs or spam</li>

              <li> Faster collaboration process</li>
            </ul>
          </div>
        </div>

        <div className="row ">
          <div className="primaryBg p-5 text-white">
            <div>
              <h1>Ready to Collaborate with Trusted Brands?</h1>
              <button type="button" class="outlineBtn px-4">
                Browse Brands
              </button>
              <button type="button" class="secondaryBtn px-4">
                Create Influencer Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
