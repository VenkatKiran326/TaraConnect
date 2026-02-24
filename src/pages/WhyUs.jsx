import React from 'react'
import { Link } from 'react-router-dom'

const WhyUs = () => {
  return (
  <section>
    <div className="container">
        <div className="py-5">
        <h1 className="myCenter text-center mb-4">WHY TARACONNECT?</h1>
        <div className="row align-items-center g-4">
            <div className="col-md-7 d-flex justify-content-center">
                <img src="https://www.bitsathy.ac.in/wp-content/uploads/Marketing-1-768x732.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center">
                <ul className="mb-0">
                    <li className="fs-5  py-2">Centralized collaboration hub</li>
                    <li className="fs-5 py-2">Saves time & effort</li>
                    <li className="fs-5 py-2">Trust & transparency</li>
                    <li className="fs-5 py-2">Data-driven influencer selection</li>
                </ul>
            </div>
        </div>
        <div className="row text-center mt-5">
                <h1 className="myCenter mb-4">Our Brands parnters</h1>
                <div className="col-md-4 steps myCard d-flex flex-column align-items-center">
                <img src="https://images.seeklogo.com/logo-png/13/1/tata-logo-png_seeklogo-135878.png" alt="" width={100} />
                <h3>Tata</h3>
               <p> Merchants list campaigns. Influencers showcase audience & engagement.</p>
            </div>
            <div className="col-md-4 steps myCard d-flex flex-column align-items-center">
                <img src="https://images.seeklogo.com/logo-png/34/1/ajio-logo-png_seeklogo-348946.png" alt="" width={100} />
                <h3>Ajio</h3>
               <p> Use filters to find the perfect collaboration match.</p>
            </div>
            <div className="col-md-4 steps myCard d-flex flex-column align-items-center">
                <img src="https://images.seeklogo.com/logo-png/23/1/kalyan-jewellers-logo-png_seeklogo-238783.png" alt="" width={100} />
                <h3>Kalyan Jwellers</h3>
               <p> Chat, negotiate, launch campaigns, and track performance.</p>
            </div>
                <Link to="/brands"> View all</Link>
        </div>

            <div className="row text-center mt-5">
                <h1  className="myCenter mb-4">Our Influencer parnters</h1>
                <div className="col-md-4 steps myCard d-flex flex-column align-items-center">
                <img src="https://images.unsplash.com/photo-1668004828851-af95a042793e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={100} />
                <h3>John</h3>
               <p> Merchants list campaigns. Influencers showcase audience & engagement.</p>
            </div>
            <div className="col-md-4 steps myCard d-flex flex-column align-items-center">
                <img src="https://images.unsplash.com/photo-1613053341085-db794820ce43?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={100} />
                <h3>Suu suresh</h3>
               <p> Use filters to find the perfect collaboration match.</p>
            </div>
            <div className="col-md-4 steps myCard d-flex flex-column align-items-center">
                <img src="https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={100} />
                <h3>Kiran</h3>
               <p> Chat, negotiate, launch campaigns, and track performance.</p>
            </div>
            <Link to="/influencers"> View all</Link>
            





        </div>
        </div>
    </div>
  </section>
  )
}

export default WhyUs
