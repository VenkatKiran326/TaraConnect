import React, { useEffect, useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchInfluencers, createInfluencer } from "../services/api";

const Influencers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileForm, setProfileForm] = useState({ name: "", handle: "", bio: "", categories: "" });
  const { token, user } = useAuth();

  useEffect(() => {
    setLoading(true);
    fetchInfluencers(token)
      .then((items) => {
        setData(items || []);
      })
      .catch((err) => setError(err.message || "Unable to load influencers"))
      .finally(() => setLoading(false));
  }, [token]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please sign in to create an influencer profile.");
      return;
    }
    try {
      const payload = {
        name: profileForm.name,
        handle: profileForm.handle,
        bio: profileForm.bio,
        categories: profileForm.categories
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean),
      };
      const result = await createInfluencer(payload, token);
      if (result._id) {
        setData((prev) => [result, ...prev]);
        setProfileForm({ name: "", handle: "", bio: "", categories: "" });
      } else {
        alert(result.msg || "Unable to create profile");
      }
    } catch (err) {
      console.error(err);
      alert("Could not create influencer profile");
    }
  };

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
                    <Tooltip {...props}>SignUp as Influencer</Tooltip>
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

          {token ? (
            user?.role === "influencer" ? (
              <div className="mb-4 p-4 border rounded bg-light">
                <h4>Create an influencer profile</h4>
                <form onSubmit={handleCreate}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      name="name"
                      value={profileForm.name}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Handle</label>
                    <input
                      name="handle"
                      value={profileForm.handle}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="@username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <textarea
                      name="bio"
                      value={profileForm.bio}
                      onChange={handleInput}
                      className="form-control"
                      rows="2"
                      placeholder="Short bio"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Categories</label>
                    <input
                      name="categories"
                      value={profileForm.categories}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="e.g. Fashion, Beauty"
                    />
                  </div>
                  <button type="submit" className="primaryBtn">
                    Create Profile
                  </button>
                </form>
              </div>
            ) : (
              <div className="alert alert-warning">
                You are logged in as a brand. Only influencer users can create influencer profiles.
                <div>
                  <Link to="/influencerdashboard">Go to Influencer Dashboard</Link>
                </div>
              </div>
            )
          ) : (
            <div className="alert alert-info">
              <Link to="/signin">Sign in</Link> to create and manage your influencer profile.
            </div>
          )}

          <div className="cards ">
            {loading && <p>Loading influencers...</p>}
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              {data.map((item) => (
                <div className="col-md-4 steps myCard" key={item._id}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="https://via.placeholder.com/100"
                        alt={item.name}
                        width={100}
                      />
                    </div>
                    <div className="col-md-7">
                      <h3 className="mb-0">{item.name}</h3>
                      <small style={{ color: "var(--secondary)" }}>
                        {item.categories?.join(", ")}
                      </small>
                      <h6>{item.handle}</h6>
                      <small>{item.bio}</small>
                    </div>
                  </div>

                  <div className="row">
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
                            alt="instagram"
                            width={20}
                          />
                          <img
                            src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721828/twitter_hulqqb.png"
                            alt="twitter"
                            width={20}
                          />
                          <img
                            src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721827/youtube_qd5zrf.png"
                            alt="youtube"
                            width={20}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="p-4 ms-4">
                      <button className="primaryBtn">View Profile</button>
                      <button className="secondaryBtn">Invite to Collaborate</button>
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
              <li> ? Verified</li>
              <li>? Trusted Brand</li>
            </ul>
          </div>
        </div>

        <div className="row ">
          <div className="bg-black p-5 text-white">
            <h1 className="myCenter pb-4">Why Collaborate Through TaraConnect?</h1>
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
              <button type="button" className="outlineBtn px-4">
                Browse Influencers
              </button>
              <button type="button" className="secondaryBtn px-4">
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
