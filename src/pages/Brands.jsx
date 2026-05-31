import React, { useEffect, useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchBrands, createBrand } from "../services/api";

const Brands = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [brandForm, setBrandForm] = useState({ name: "", website: "", description: "" });
  const { token, user } = useAuth();

  useEffect(() => {
    setLoading(true);
    fetchBrands(token)
      .then((brands) => {
        setData(brands || []);
      })
      .catch((err) => setError(err.message || "Unable to load brands"))
      .finally(() => setLoading(false));
  }, [token]);

  const handleBrandChange = (e) => {
    const { name, value } = e.target;
    setBrandForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrandSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please sign in to create a brand.");
      return;
    }
    try {
      const result = await createBrand(brandForm, token);
      if (result._id) {
        setData((prev) => [result, ...prev]);
        setBrandForm({ name: "", website: "", description: "" });
      } else {
        alert(result.msg || "Unable to create brand");
      }
    } catch (err) {
      console.error(err);
      alert("Could not create brand");
    }
  };

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
                    <Link to="/signup" className="text-white text-decoration-none">
                      Brand
                    </Link>
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
                    <Link to="/signup" className="text-white text-decoration-none">
                      Influencers
                    </Link>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770206067/5476534_hy34ln.jpg"
              alt=""
              width={700}
            />
          </div>
        </div>

        <div className="row">
          <h3 className="myCenter p-4">Select Brand by Categories</h3>
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
            user?.role === "brand" ? (
              <div className="mb-4 p-4 border rounded bg-light">
                <h4>Create a new brand</h4>
                <form onSubmit={handleBrandSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Brand name</label>
                    <input
                      name="name"
                      value={brandForm.name}
                      onChange={handleBrandChange}
                      className="form-control"
                      placeholder="Brand name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Website</label>
                    <input
                      name="website"
                      value={brandForm.website}
                      onChange={handleBrandChange}
                      className="form-control"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      value={brandForm.description}
                      onChange={handleBrandChange}
                      className="form-control"
                      rows="3"
                    />
                  </div>
                  <button type="submit" className="primaryBtn">
                    Create Brand
                  </button>
                </form>
              </div>
            ) : (
              <div className="alert alert-warning">
                You are logged in as an influencer. Only brand users can create brand profiles.
                <div>
                  <Link to="/branddashboard">Go to Brand Dashboard</Link>
                </div>
              </div>
            )
          ) : (
            <div className="alert alert-info">
              <Link to="/signin">Sign in</Link> to add a brand and save collaborations.
            </div>
          )}

          <div className="cards ">
            <div className="row">
              {data.slice(0, 5).map((item) => (
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
                        {item.website}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="icon">
                      <p>{item.description}</p>
                      <div className="d-flex">
                        <div>
                          <p>Owner: {item.owner ? item.owner.name : "Unknown"}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 ms-4">
                      <button className="primaryBtn">View Profile</button>
                      <button className="secondaryBtn">Share Interest</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="myCenter p-4">Why choose us?</h3>
            <ul>
              <li>Trusted Brands Badge (Build Trust)</li>
              <li>✅ Verified</li>
              <li>⭐ Trusted Brand</li>
            </ul>
          </div>
        </div>

        <div className="row ">
          <div className="bg-black p-5 text-white">
            <h1 className="myCenter ">Why This Platform Helps Influencers</h1>
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
              <button type="button" className="outlineBtn px-4">
                Browse Brands
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

export default Brands;
