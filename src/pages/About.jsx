import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
function About(){
    return(
        <>
        <div className="gradient-bg">
        <div className="container gradient-bg py-5">
            <div className="hero myCenter vh-100 d-flex justify-content-center align-items-center text-center px-3">
                <h1 className="text-white display-5 fw-semibold">We Building meaningful connections between brands and influencers.</h1>
            </div>
            
            
            <div className="story my-5">
                <h3 className="myCenter pb-3 text-center">🌍 Our Story (Why TaraConnect)</h3>
                <article className="lead text-muted text-center col-lg-10 mx-auto">
                    TaraConnect was created to simplify the way brands and influencers collaborate in the digital marketing ecosystem.

While brands often struggle to find trustworthy influencers who align with their values, influencers face challenges in discovering genuine brands that are actively seeking collaborations. TaraConnect bridges this gap by providing a transparent, trusted, and efficient platform for collaboration.
                </article>
            </div>

            <div className="ourMission my-5 text-center">
                <p className="lead mb-3">Our mission is to empower brands and influencers to grow together through trusted, transparent, and meaningful collaborations.</p>

                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li>Help brands reach the right audience</li>
                    <li>Help influencers monetize their creativity</li>
                    <li>Remove uncertainty from influencer marketing</li>
                </ul>
            </div>

            <div className="offer my-5">
                <h3 className="myCenter pb-3 text-center">🚀 What TaraConnect Offers</h3>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <h6 className="fs-5 fw-semibold text-center">For Brands</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>Discover influencers by category and engagement</li>
                            <li>Collaborate with verified creators</li>
                            <li>Reach the right audience faster</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <h6 className="fs-5 fw-semibold text-center">For Influencers</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>Find trusted brands easily</li>
                            <li>Express interest directly for collaborations</li>
                            <li>Work with brands actively seeking influencers</li>
                        </ul>
                    </div>
                </div>
            </div>

<div className="trust my-5 text-center">
    <h3 className="myCenter pb-3">🔐 Trust & Transparency</h3>
    <p className="lead mb-3">TaraConnect focuses on building a reliable ecosystem where both brands and influencers feel confident to collaborate.</p>

    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
        <li>Verified profiles</li>
        <li>Clear collaboration intent</li>
        <li>No cold DMs or spam outreach</li>
    </ul>
</div>

<div className="vision my-5 text-center">
    <h3 className="myCenter pb-3">Our Vision</h3>
    <p className="lead mb-4">To become a trusted collaboration hub where brands and influencers connect seamlessly and grow together in the evolving digital landscape.</p>

    <h6 className="myCenter pb-3 fw-semibold">Join with us</h6>
     <div className="d-flex justify-content-center">
              <div className="w-100 d-flex justify-content-center flex-wrap gap-2" style={{ maxWidth: 700, padding: 10 }}>
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


        </div>
        </div>
        </>
    )
}
export default About
