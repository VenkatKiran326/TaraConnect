import React, { useState } from 'react'
import Navbar from './Navbar'
import '../styles/InfluencerDashboard.css'

const InfluncerDashboard = () => {
  const [invitations, setInvitations] = useState([
    { id: 1, brand: 'Nike', campaign: 'Summer Drop', category: 'Fashion', status: 'Pending', date: '2024-02-08' },
    { id: 2, brand: 'GlowBeauty', campaign: 'Winter Glow', category: 'Beauty', status: 'Approved', date: '2024-01-25' },
    { id: 3, brand: 'FitLife', campaign: 'Active Living', category: 'Fitness', status: 'Rejected', date: '2024-01-30' },
  ])

  const [requests] = useState([
    { id: 1, brand: 'UrbanStyle', campaign: 'Streetwear Collab', status: 'Pending' },
    { id: 2, brand: 'HomeChef', campaign: 'Kitchen Essentials', status: 'Pending' },
  ])

  const [recommended] = useState([
    { id: 1, name: 'Fresh Looks Co', category: 'Fashion', match: '93%', description: 'Brands matching your Fashion niche' },
    { id: 2, name: 'Beauty World', category: 'Beauty', match: '89%', description: 'Verified beauty brands' },
    { id: 3, name: 'FitLife', category: 'Fitness', match: '85%', description: 'Active sports brands' },
  ])

  const handleAccept = (id) => {
    setInvitations(invitations.map(i => i.id === id ? { ...i, status: 'Approved' } : i))
  }

  const handleDecline = (id) => {
    setInvitations(invitations.map(i => i.id === id ? { ...i, status: 'Rejected' } : i))
  }

  const brandsApplied = requests.length
  const activeCollaborations = invitations.filter(i => i.status === 'Approved').length
  const pendingInvitations = invitations.filter(i => i.status === 'Pending').length

  return (
    <>
     
      <div className="influencer-dashboard">
        <div className="container">
          {/* Welcome Section */}
          <section className="welcome">
            <div className="profile">
              <div className="avatar">A</div>
              <div className="profile-info">
                <h1>Alexandra Reed</h1>
                <p className="niche">Primary: Fashion • Availability: <span className="status-open">Open</span></p>
              </div>
            </div>
            <div className="quick-actions">
              <button className="btn-primary">Browse Brands</button>
              <button className="btn-outline">Update Profile</button>
            </div>
          </section>

          {/* Overview Cards */}
          <section className="overview-cards">
            <div className="card">
              <div className="card-icon">📥</div>
              <div className="card-body">
                <h3>Brands Applied</h3>
                <p className="value">{brandsApplied}</p>
                <span className="muted">Opportunities you've applied to</span>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">🤝</div>
              <div className="card-body">
                <h3>Active Collaborations</h3>
                <p className="value">{activeCollaborations}</p>
                <span className="muted">Currently running campaigns</span>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">⏳</div>
              <div className="card-body">
                <h3>Pending Invitations</h3>
                <p className="value">{pendingInvitations}</p>
                <span className="muted">Awaiting your response</span>
              </div>
            </div>
          </section>

          <div className="main-grid">
            {/* My Collaboration Requests */}
            <section className="panel requests-panel">
              <div className="panel-header">
                <h2>My Collaboration Requests</h2>
                <span className="panel-sub">Track requests you made to brands</span>
              </div>
              <div className="panel-body">
                {requests.length ? (
                  <ul className="requests-list">
                    {requests.map(r => (
                      <li key={r.id} className="request-row">
                        <div>
                          <strong>{r.brand}</strong>
                          <div className="small">{r.campaign}</div>
                        </div>
                        <div className="row-right">
                          <span className={`status ${r.status}`}>{r.status}</span>
                          <button className="link">View details</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="empty">No collaboration requests yet.</div>
                )}
              </div>
            </section>

            {/* Invitations from Brands */}
            <section className="panel invites-panel">
              <div className="panel-header">
                <h2>Invitations from Brands</h2>
                <span className="panel-sub">Accept or decline invitations</span>
              </div>
              <div className="panel-body">
                {invitations.map(inv => (
                  <div key={inv.id} className="invite-row">
                    <div className="invite-left">
                      <div className="brand-name">{inv.brand}</div>
                      <div className="small">{inv.campaign} • {inv.category}</div>
                    </div>
                    <div className="invite-actions">
                      <span className={`status ${inv.status.toLowerCase()}`}>{inv.status}</span>
                      {inv.status === 'Pending' && (
                        <>
                          <button className="btn-accept" onClick={() => handleAccept(inv.id)}>Accept</button>
                          <button className="btn-decline" onClick={() => handleDecline(inv.id)}>Decline</button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Recommended Brands */}
          <section className="panel recommended-panel">
            <div className="panel-header">
              <h2>Recommended Brands</h2>
              <span className="panel-sub">Brands that match your niche</span>
            </div>
            <div className="panel-body brands-grid">
              {recommended.map(b => (
                <div key={b.id} className="brand-card">
                  <div className="brand-card-top">
                    <div className="brand-logo-small">{b.name.charAt(0)}</div>
                    <div>
                      <h3>{b.name}</h3>
                      <p className="small muted">{b.category} • {b.description}</p>
                    </div>
                    <div className="match">{b.match}</div>
                  </div>
                  <div className="brand-card-actions">
                    <button className="btn-outline">View Brand</button>
                    <button className="btn-primary">Connect</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default InfluncerDashboard