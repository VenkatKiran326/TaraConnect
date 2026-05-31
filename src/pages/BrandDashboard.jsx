import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import '../styles/BrandDashboard.css'

const BrandDashboard = () => {
  const { user } = useAuth();
  const [campaigns, setCampaigns] = useState([
    { id: 1, title: 'Summer Collection Launch', category: 'Fashion', status: 'Active', startDate: '2024-02-01', endDate: '2024-02-28', budget: '$5,000', influencers: 8 },
    { id: 2, title: 'Spring Fashion Week', category: 'Fashion', status: 'Active', startDate: '2024-02-05', endDate: '2024-03-15', budget: '$8,000', influencers: 12 },
    { id: 3, title: 'Beauty Trend Campaign', category: 'Beauty', status: 'Completed', startDate: '2024-01-15', endDate: '2024-01-31', budget: '$3,500', influencers: 6 },
    { id: 4, title: 'Q1 Product Showcase', category: 'Lifestyle', status: 'Draft', startDate: '2024-03-01', endDate: '2024-03-31', budget: '$6,000', influencers: 0 },
  ])

  const [requests, setRequests] = useState([
    { id: 1, name: 'Sarah Johnson', category: 'Fashion', followers: '185K', engagement: '4.8%', status: 'pending', profileImage: 'S' },
    { id: 2, name: 'Emma Wilson', category: 'Beauty', followers: '220K', engagement: '5.2%', status: 'pending', profileImage: 'E' },
    { id: 3, name: 'Olivia Davis', category: 'Lifestyle', followers: '156K', engagement: '4.5%', status: 'pending', profileImage: 'O' },
  ])

  const [recommendedInfluencers] = useState([
    { id: 1, name: 'Jessica Martinez', category: 'Fashion', followers: '320K', engagement: '5.1%', profileImage: 'J', match: '95%' },
    { id: 2, name: 'Sophia Chen', category: 'Fashion', followers: '280K', engagement: '4.9%', profileImage: 'S', match: '92%' },
    { id: 3, name: 'Lauren Blake', category: 'Fashion', followers: '245K', engagement: '5.3%', profileImage: 'L', match: '89%' },
    { id: 4, name: 'Mia Thompson', category: 'Fashion', followers: '198K', engagement: '4.7%', profileImage: 'M', match: '87%' },
  ])

  const handleAcceptRequest = (id) => {
    setRequests(requests.filter(r => r.id !== id))
  }

  const handleRejectRequest = (id) => {
    setRequests(requests.filter(r => r.id !== id))
  }

  const activeCampaigns = campaigns.filter(c => c.status === 'Active').length
  const collaborationRequests = requests.length
  const connectedInfluencers = campaigns.reduce((sum, c) => sum + c.influencers, 0)

  return (
    <>
 
      <div className="brand-dashboard">
        <div className="dashboard-container">
          {/* Welcome Section */}
          <section className="welcome-section">
            <div className="welcome-content">
              <div className="brand-info">
                <div className="brand-logo">{user?.name?.charAt(0) || 'B'}</div>
                <div className="brand-details">
                  <h1>{user?.name || 'Brand User'}</h1>
                  <p>Welcome back! Here's what's happening with your collaborations today.</p>
                </div>
              </div>
              <button className="btn-create-campaign">+ Create Campaign</button>
            </div>
          </section>

          {/* Overview Statistics */}
          <section className="overview-stats">
            <h2>Overview</h2>
            <div className="stats-grid">
              <div className="stat-card card-active">
                <div className="stat-icon">🚀</div>
                <div className="stat-content">
                  <h3>Active Campaigns</h3>
                  <p className="stat-value">{activeCampaigns}</p>
                  <span className="stat-subtext">Running now</span>
                </div>
              </div>

              <div className="stat-card card-requests">
                <div className="stat-icon">📬</div>
                <div className="stat-content">
                  <h3>Collaboration Requests</h3>
                  <p className="stat-value">{collaborationRequests}</p>
                  <span className="stat-subtext">Awaiting response</span>
                </div>
              </div>

              <div className="stat-card card-influencers">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <h3>Influencers Connected</h3>
                  <p className="stat-value">{connectedInfluencers}</p>
                  <span className="stat-subtext">Across campaigns</span>
                </div>
              </div>

              <div className="stat-card card-performance">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <h3>Overall Performance</h3>
                  <p className="stat-value">238%</p>
                  <span className="stat-subtext">ROI this quarter</span>
                </div>
              </div>
            </div>
          </section>

          <div className="dashboard-main">
            {/* My Campaigns */}
            <section className="dashboard-section campaigns-section">
              <div className="section-header">
                <h2>My Campaigns</h2>
                <a href="#" className="view-all-link">View All →</a>
              </div>

              <div className="campaigns-list">
                {campaigns.map(campaign => (
                  <div key={campaign.id} className="campaign-card">
                    <div className="campaign-header">
                      <div>
                        <h3>{campaign.title}</h3>
                        <p className="campaign-category">{campaign.category}</p>
                      </div>
                      <span className={`campaign-status status-${campaign.status.toLowerCase()}`}>
                        {campaign.status}
                      </span>
                    </div>

                    <div className="campaign-details">
                      <div className="detail-item">
                        <span className="detail-label">Budget:</span>
                        <span className="detail-value">{campaign.budget}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Influencers:</span>
                        <span className="detail-value">{campaign.influencers}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Duration:</span>
                        <span className="detail-value">{campaign.startDate} - {campaign.endDate}</span>
                      </div>
                    </div>

                    <button className="btn-view-details">View Details</button>
                  </div>
                ))}
              </div>
            </section>

            {/* Influencer Requests */}
            <section className="dashboard-section requests-section">
              <div className="section-header">
                <h2>Influencer Requests</h2>
                <span className="badge-count">{requests.length} new</span>
              </div>

              <div className="requests-list">
                {requests.length > 0 ? (
                  requests.map(request => (
                    <div key={request.id} className="request-card">
                      <div className="influencer-info">
                        <div className="influencer-avatar">{request.profileImage}</div>
                        <div className="influencer-details">
                          <h4>{request.name}</h4>
                          <p className="influencer-category">{request.category} • {request.followers} followers</p>
                          <span className="engagement-rate">Engagement: {request.engagement}</span>
                        </div>
                      </div>

                      <div className="request-actions">
                        <button
                          className="btn-accept"
                          onClick={() => handleAcceptRequest(request.id)}
                          title="Accept collaboration request"
                        >
                          ✓ Accept
                        </button>
                        <button
                          className="btn-decline"
                          onClick={() => handleRejectRequest(request.id)}
                          title="Decline collaboration request"
                        >
                          ✕ Decline
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    <p>No pending requests at the moment</p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Recommended Influencers */}
          <section className="dashboard-section recommended-section">
            <div className="section-header">
              <h2>Recommended Influencers</h2>
              <p className="section-subtext">Based on your campaign categories</p>
            </div>

            <div className="influencers-grid">
              {recommendedInfluencers.map(influencer => (
                <div key={influencer.id} className="influencer-card">
                  <div className="influencer-card-header">
                    <div className="influencer-avatar-large">{influencer.profileImage}</div>
                    <span className="match-badge">{influencer.match} Match</span>
                  </div>

                  <div className="influencer-card-content">
                    <h3>{influencer.name}</h3>
                    <p className="card-category">{influencer.category}</p>

                    <div className="influencer-stats">
                      <div className="stat">
                        <span className="stat-label">Followers</span>
                        <span className="stat-number">{influencer.followers}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Engagement</span>
                        <span className="stat-number">{influencer.engagement}</span>
                      </div>
                    </div>

                    <button className="btn-view-profile">View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions-section">
            <h2>Quick Actions</h2>
            <div className="quick-actions-grid">
              <div className="quick-action-card">
                <div className="action-icon">📝</div>
                <h3>Create New Campaign</h3>
                <p>Launch a new influencer campaign and set your goals</p>
                <button className="btn-action">Get Started</button>
              </div>

              <div className="quick-action-card">
                <div className="action-icon">🔍</div>
                <h3>Browse Influencers</h3>
                <p>Explore our network of verified influencers</p>
                <button className="btn-action">Browse</button>
              </div>

              <div className="quick-action-card">
                <div className="action-icon">📊</div>
                <h3>View Analytics</h3>
                <p>Track campaign performance and ROI metrics</p>
                <button className="btn-action">Analytics</button>
              </div>

              <div className="quick-action-card">
                <div className="action-icon">⚙️</div>
                <h3>Manage Profile</h3>
                <p>Update your brand info and preferences</p>
                <button className="btn-action">Settings</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default BrandDashboard