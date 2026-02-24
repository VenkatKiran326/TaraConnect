import React, { useEffect, useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";

const Influencers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/influencersData")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="container ">
        <div className="row vh-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className=" justify-content-center align-items-center">
              <h1>Discover Influencers Who Match Your Brand</h1>
              <p className="text-muted">
                Explore verified influencers across multiple categories and
                collaborate with creators who are actively looking for brand
                partnerships.
              </p>
            </div>
            <div className="d-flex">
              <div style={{ display: "block", width: 700, padding: 10 }}>
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>SignUp as Influencers</Tooltip>
                  )}
                  placement="bottom"
                >
                  <Link to="/signup">
                    <Button variant="warning" className="btn m-2 primaryBtn">
                      SignUp
                    </Button>
                  </Link>
                </OverlayTrigger>

                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>Learn More as Influencers</Tooltip>
                  )}
                  placement="bottom"
                >
                  <Button variant="warning" className="btn secondaryBtn">
                    Learn More
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770206375/62336_e54sxy.jpg"
              alt=""
              width={700}
            />
          </div>
        </div>

        <div className="row">
          <h3 className="text-muted myCenter pb-4">
            Select Brand by Categories
          </h3>
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
              {data.map((item) => (
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
                      <h6>
                        {item.platforms} | {item.followers}+ followers
                      </h6>
                      {/* <h6>📈 Engagement: {item.engagement}</h6> */}
                      <small>{item.bio}</small>
                      <p>
                        <b>Status:</b> {item.availability}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    {/* <div className="col-md-6"> */}
                    <div className="icon">
                      <div className="social-icons px-4 m-3">
                        <a href="#">
                          <img
                            src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721828/facebook_cpxegr.png"
                            alt="facebook"
                            width={20}
                          />
                          <img
                            src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721827/instagram_ebh4qc.png"
                            alt=""
                            width={20}
                          />
                          <img
                            src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721828/twitter_hulqqb.png"
                            alt=""
                            width={20}
                          />
                          <img
                            src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721827/youtube_qd5zrf.png"
                            alt=""
                            width={20}
                          />
                        </a>
                      </div>
                    </div>
                    {/* </div> */}

                    <div className="p-4 ms-4">
                      <button className="primaryBtn">View Profile</button>
                      <button className="secondaryBtn">
                        Invite to Collaborate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-muted myCenter pb-4">Why choose us?</h3>
            <ul>
              <li>Trusted Brands Badge (Build Trust)</li>
              <li> ✅ Verified</li>
              <li>⭐ Trusted Brand</li>
            </ul>
          </div>
        </div>

        <div className="row ">
          <div className="bg-black p-5 text-white">
            <h1 className=" myCenter pb-4">
              Why Collaborate Through TaraConnect?
            </h1>

            <ul className="m-3">
              <li> Discover influencers actively seeking collaborations</li>

              <li>Work with verified and trusted creators</li>

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
                Browse Influencers
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
export default Influencers;
