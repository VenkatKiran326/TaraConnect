import React from "react";

import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export const Hero = () => {
  return (
    <section className="gradient-bg">
      <div className=" m-4">
        <div className="container ">
          <div className="row vh-100">
            {/* <div style={{ backgroundImage: `url(${bg})`,height: "100vh",backgroundSize: "cover",backgroundPosition: "center"}}> */}
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ">
                <h1>Connecting Brands with the Right Voices</h1>
                <p className="text-muted">
                  TaraConnect helps merchants discover trusted influencers and
                  enables creators to monetize their influence through
                  transparent and meaningful collaborations.
                </p>
              <div className="d-flex">
                <div style={{ display: "block", width: 700, padding: 10 }}>
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>SignUp as Brand</Tooltip>
                    )}
                    placement="bottom"
                  >
                    <Button variant="" className="m-2 primaryBtn">
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
                    <Button variant="warning" className="secondaryBtn">
                      Influencers
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/dwad4li0t/image/upload/v1770639234/blogger-streaming-online-fashion-isometric-illustration_ogrw3r.png"
                alt="" width={800}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;