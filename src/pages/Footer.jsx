import React from "react";
import bg from "../assets/logo_taraconnect_2.png";

const Footer = () => {
  return (
    <section style={{ background: "var(--background)",color: "var(--text)" }}>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4">
            <img src={bg} alt="" width={200} />
            <p className="pt-4">
              TaraConnect helps merchants discover trusted influencers and
              enables creators to monetize their influence through transparent
              and meaningful collaborations.
            </p>

            <div className="social-icons px-4 m-3">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721828/facebook_cpxegr.png"
                  alt="facebook"
                  width={30}
                />
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721827/instagram_ebh4qc.png"
                  alt=""
                  width={30}
                />
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721828/twitter_hulqqb.png"
                  alt=""
                  width={30}
                />
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1768721827/youtube_qd5zrf.png"
                  alt=""
                  width={30}
                />
              </a>
            </div>
            <a href="#">
            <button className="btn btn-warning">Back to Up</button></a>
          </div>
          <div className="col-md-3">
            <ul>
            
              <h5>Contact us</h5>
              <li>About us</li>
              <li>Carrer</li>
              <li>Contact us</li>
              <li>Contact us</li>
            </ul>
            <ul>
              <h5>Legal</h5>
              <li>Privacy and policy</li>
              <li>Terms of Services</li>
              <li>Contact us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-md-5">
            

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34240860835!2d78.24289195246527!3d17.412280735717392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1768731028130!5m2!1sen!2sin"
                width="400"
                height="250"
                style={{ border: 0, borderRadius: 10 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <small>Copyright 2026 by Tara Connect. All Rights Reserved. </small>
    </section>
  );
};

export default Footer;
