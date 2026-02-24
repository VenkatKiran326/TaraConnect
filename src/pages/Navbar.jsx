import React from "react";
import bg from "../assets/logo_taraconnect_2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container ">
          <Link to="/" className="navbar-brand">
            <img
              src={bg}
              alt="Tara Connect"
              width="150"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/brands" className="nav-link">
                  Brands
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Influencers
                </span>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/influencers">
                      Fashion & Apparel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/influencers">
                      Shopping / Retail
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/influencers">
                     E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/influencers">
                      Beauty & Skincare
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/influencers">
                      Food & Beverages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/influencers">
                      Tech & Gadgets
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="button">
                Search
              </button>

              <Link to="/signin">
                <button className=" primaryBtn" type="button">
                  Signin
                </button>
              </Link>

              <Link to="/signup">
                <button className=" secondaryBtn" type="button">
                  Signup
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
