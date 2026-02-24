import React from 'react'

const HowitWorks = () => {
  return (
    
    <section>
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <h1 className="myCenter">How it Works?</h1>
            <p className="text-muted myCenter pb-4">Simple 3 Steps</p>
            <div className="row w-100 justify-content-center">
            <div className="col-md-4 steps myCard">
                <img src="https://res.cloudinary.com/dwad4li0t/image/upload/v1749040061/3d-rendering-neon-triangle_mdkxev.jpg" alt="" width={100} />
                <h3 className='py-4'>Step 1 – Create Profile</h3>
               <p> Merchants list campaigns. Influencers showcase audience & engagement.</p>
            </div>
            <div className="col-md-4 steps myCard">
                <img src="https://res.cloudinary.com/dwad4li0t/image/upload/v1749040061/3d-rendering-neon-triangle_mdkxev.jpg" alt="" width={100} />
                <h3 className='py-4'>Step 2 – Discover & Connect</h3>
               <p> Use filters to find the perfect collaboration match.</p>
            </div>
            <div className="col-md-4 steps myCard">
                <img src="https://res.cloudinary.com/dwad4li0t/image/upload/v1749040061/3d-rendering-neon-triangle_mdkxev.jpg" alt="" width={100} />
                <h3 className='py-4'>Step 3 – Collaborate & Grow</h3>
               <p> Chat, negotiate, launch campaigns, and track performance.</p>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default HowitWorks
