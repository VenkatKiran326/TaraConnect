import React, { useState } from "react";
import "../styles/InfluencerDashboard.css";

const InfluencerDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const stats = [
    { title: "Brands Applied", value: 24, icon: "📥" },
    { title: "Collaborations", value: 12, icon: "🤝" },
    { title: "Invitations", value: 5, icon: "📨" },
    { title: "Brand Matches", value: 18, icon: "✨" },
  ];

  const invitations = [
    { brand: "Nike", campaign: "Summer Drop", status: "pending" },
    { brand: "Adidas", campaign: "Run Challenge", status: "approved" },
  ];

  const brands = [
    { name: "Fresh Looks", match: "93%" },
    { name: "Beauty World", match: "89%" },
    { name: "FitLife", match: "85%" },
  ];

  return (
    <div className={`dashboard ${darkMode ? "dark" : ""}`}>
      <div className="container">

        <div className="dashboard-header">
          <div className="profile-section">
            <div className="avatar">D</div>
            <div>
              <p className="eyebrow">Influencer Dashboard</p>
              <h1>Durga</h1>
              <p>Fashion Creator • Open for Collaborations</p>
            </div>
          </div>

          <div className="header-actions">
            <button className="btn-primary">Browse Brands</button>
            <button className="btn-outline">Update Profile</button>
            <button
              className="btn-outline"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </div>

        <div className="overview-cards">
          {stats.map((item) => (
            <div className="card" key={item.title}>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <h2>{item.value}</h2>
            </div>
          ))}
        </div>

        <div className="main-grid">
          <div className="panel">
            <h2>Invitations</h2>

            {invitations.map((inv) => (
              <div className="row" key={inv.brand}>
                <div>
                  <strong>{inv.brand}</strong>
                  <p>{inv.campaign}</p>
                </div>

                <span className={`status ${inv.status}`}>
                  {inv.status}
                </span>
              </div>
            ))}
          </div>

          <div className="panel">
            <h2>Profile Completion</h2>
            <div className="progress">
              <div className="progress-fill"></div>
            </div>
            <p>85% Complete</p>
          </div>
        </div>

        <div className="panel">
          <h2>Recommended Brands</h2>

          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-card" key={brand.name}>
                <h3>{brand.name}</h3>
                <div className="match">{brand.match}</div>

                <div className="brand-actions">
                  <button className="btn-outline">View</button>
                  <button className="btn-primary">Connect</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfluencerDashboard;
