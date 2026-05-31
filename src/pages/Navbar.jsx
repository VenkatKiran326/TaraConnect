import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import bg from "../assets/logo_taraconnect_2.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const dashboardRoute = user
    ? user.role === "brand"
      ? "/branddashboard"
      : user.role === "influencer"
      ? "/influencerdashboard"
      : "/admindashboard"
    : null;

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{
        background: "#ffffff",
      }}
    >
      <div className="container">

        {/* Logo */}

        <Link to="/" className="navbar-brand">
          <img
            src={bg}
            alt="TaraConnect"
            width="150"
          />
        </Link>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          {/* Left Menu */}

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to="/" className="nav-link">
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
                  <Link
                    className="dropdown-item"
                    to="/influencers"
                  >
                    Fashion & Apparel
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/influencers"
                  >
                    Beauty & Skincare
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/influencers"
                  >
                    Food & Beverage
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/influencers"
                  >
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

            {dashboardRoute && (
              <li className="nav-item">
                <Link
                  to={dashboardRoute}
                  className="nav-link fw-bold text-success"
                >
                  Dashboard
                </Link>
              </li>
            )}

          </ul>

          {/* Search */}

          <div className="d-flex align-items-center gap-2">

            <input
              className="form-control"
              type="search"
              placeholder="Search brands..."
            />

            <button
              className="btn btn-outline-success"
              type="button"
            >
              Search
            </button>

            {/* User Actions */}

            {user ? (
              <>
                <span
                  className="fw-semibold ms-2"
                >
                  Hi, {user.name}
                </span>

                <button
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="btn btn-success"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="btn btn-outline-success"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;