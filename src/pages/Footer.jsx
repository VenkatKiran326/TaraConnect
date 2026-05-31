import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/logo_taraconnect_2.png";
import '../styles/landing.css'

const Footer = () => {
  return (
    <footer
      className="py-5 mt-5"
      style={{
        background: "#0f172a",
        color: "#fff",
      }}
    >
      <div className="container">

        <div className="row g-5">

          {/* Company Info */}

          <div className="col-lg-4">

            <img
              src={bg}
              alt="TaraConnect"
              width={180}
              className="mb-3"
            />

            <p className="text-light-emphasis">
              TaraConnect helps merchants discover trusted influencers
              and enables creators to monetize their influence through
              transparent and meaningful collaborations.
            </p>

            <div className="d-flex gap-3 mt-4">

              <a href="#">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721828/facebook_cpxegr.png"
                  alt="Facebook"
                  width="30"
                />
              </a>

              <a href="#">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721827/instagram_ebh4qc.png"
                  alt="Instagram"
                  width="30"
                />
              </a>

              <a href="#">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721828/twitter_hulqqb.png"
                  alt="Twitter"
                  width="30"
                />
              </a>

              <a href="#">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721827/youtube_qd5zrf.png"
                  alt="Youtube"
                  width="30"
                />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2">

            <h5 className="mb-4">Company</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/careers" className="footer-link">
                  Careers
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div className="col-lg-2">

            <h5 className="mb-4">Legal</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/cookies" className="footer-link">
                  Cookie Policy
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-4">

            <h5 className="mb-4">
              Contact Information
            </h5>

            <p>
              📍 Hyderabad, Telangana, India
            </p>

            <p>
              📧 support@taraconnect.com
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <button
              className="btn btn-success mt-2"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Back to Top ↑
            </button>

          </div>

        </div>

        <hr
          style={{
            borderColor: "#334155",
            marginTop: "40px",
          }}
        />

        <div className="text-center text-secondary">
          © 2026 TaraConnect. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;