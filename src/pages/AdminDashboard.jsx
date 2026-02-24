import React, { useState } from 'react'
import Navbar from './Navbar'
import '../styles/AdminDashboard.css'

const AdminDashboard = () => {
  // Sample data
  const [users, setUsers] = useState([
    { id: 1, name: 'Sarah Johnson', type: 'Influencer', category: 'Fashion', status: 'Active', verified: true, joinDate: '2024-01-15' },
    { id: 2, name: 'Nike Brand Co', type: 'Brand', category: 'Sports', status: 'Active', verified: true, joinDate: '2024-01-10' },
    { id: 3, name: 'Emma Wilson', type: 'Influencer', category: 'Beauty', status: 'Pending', verified: false, joinDate: '2024-02-01' },
    { id: 4, name: 'Zara Fashion', type: 'Brand', category: 'Fashion', status: 'Active', verified: true, joinDate: '2024-01-05' },
    { id: 5, name: 'Alex Chen', type: 'Influencer', category: 'Tech', status: 'Blocked', verified: false, joinDate: '2024-01-20' },
  ])

  const [collaborations, setCollaborations] = useState([
    { id: 1, brand: 'Nike', influencer: 'Sarah Johnson', status: 'Approved', date: '2024-02-08' },
    { id: 2, brand: 'Zara', influencer: 'Emma Wilson', status: 'Requested', date: '2024-02-07' },
    { id: 3, brand: 'Nike', influencer: 'John Doe', status: 'Rejected', date: '2024-02-06' },
  ])

  const [categoryData] = useState([
    { name: 'Fashion', brands: 24, influencers: 156 },
    { name: 'Beauty', brands: 18, influencers: 203 },
    { name: 'Tech', brands: 15, influencers: 89 },
    { name: 'Sports', brands: 22, influencers: 134 },
    { name: 'Food', brands: 19, influencers: 167 },
  ])

  const handleApprove = (id, type) => {
    if (type === 'user') {
      setUsers(users.map(u => u.id === id ? { ...u, status: 'Active', verified: true } : u))
    } else {
      setCollaborations(collaborations.map(c => c.id === id ? { ...c, status: 'Approved' } : c))
    }
  }

  const handleReject = (id, type) => {
    if (type === 'user') {
      setUsers(users.map(u => u.id === id ? { ...u, status: 'Blocked' } : u))
    } else {
      setCollaborations(collaborations.map(c => c.id === id ? { ...c, status: 'Rejected' } : c))
    }
  }

  const totalBrands = users.filter(u => u.type === 'Brand').length
  const totalInfluencers = users.filter(u => u.type === 'Influencer').length
  const activeCampaigns = collaborations.filter(c => c.status === 'Approved').length
  const pendingRequests = collaborations.filter(c => c.status === 'Requested').length

  return (
    <>
   
      <div className="admin-dashboard">
        <div className="dashboard-container">
          {/* Header */}
          <div className="dashboard-header">
            <h1>Admin Dashboard</h1>
            <p>Manage platform activity and user engagement</p>
          </div>

          {/* Overview Cards */}
          <section className="overview-section">
            <h2>Overview</h2>
            <div className="cards-grid">
              <div className="metric-card card-brands">
                <div className="card-icon">👥</div>
                <div className="card-content">
                  <h3>Total Brands</h3>
                  <p className="metric-value">{totalBrands}</p>
                </div>
              </div>

              <div className="metric-card card-influencers">
                <div className="card-icon">⭐</div>
                <div className="card-content">
                  <h3>Total Influencers</h3>
                  <p className="metric-value">{totalInfluencers}</p>
                </div>
              </div>

              <div className="metric-card card-campaigns">
                <div className="card-icon">📊</div>
                <div className="card-content">
                  <h3>Active Campaigns</h3>
                  <p className="metric-value">{activeCampaigns}</p>
                </div>
              </div>

              <div className="metric-card card-pending">
                <div className="card-icon">⏳</div>
                <div className="card-content">
                  <h3>Pending Requests</h3>
                  <p className="metric-value">{pendingRequests}</p>
                </div>
              </div>
            </div>
          </section>

          <div className="dashboard-grid">
            {/* User Management */}
            <section className="dashboard-section">
              <h2>User Management</h2>
              <div className="users-table-container">
                <table className="users-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Verified</th>
                      <th>Join Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id} className={`status-${user.status.toLowerCase()}`}>
                        <td className="user-name">
                          <div className="user-avatar">{user.name.charAt(0)}</div>
                          {user.name}
                        </td>
                        <td>
                          <span className={`badge badge-${user.type.toLowerCase()}`}>
                            {user.type}
                          </span>
                        </td>
                        <td>{user.category}</td>
                        <td>
                          <span className={`status-badge status-${user.status.toLowerCase()}`}>
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className={`verify-badge ${user.verified ? 'verified' : 'unverified'}`}>
                            {user.verified ? '✓ Verified' : '✗ Pending'}
                          </span>
                        </td>
                        <td>{user.joinDate}</td>
                        <td className="action-buttons">
                          {user.status !== 'Active' && (
                            <button 
                              className="btn-approve"
                              onClick={() => handleApprove(user.id, 'user')}
                              title="Approve and verify"
                            >
                              ✓
                            </button>
                          )}
                          {user.status !== 'Blocked' && (
                            <button 
                              className="btn-reject"
                              onClick={() => handleReject(user.id, 'user')}
                              title="Reject or block"
                            >
                              ✕
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Category Insights */}
            <section className="dashboard-section">
              <h2>Category Insights</h2>
              <div className="category-insights">
                <div className="category-header">
                  <p>Distribution of brands and influencers by category</p>
                </div>
                {categoryData.map((category, index) => (
                  <div key={index} className="category-item">
                    <div className="category-name">
                      <h4>{category.name}</h4>
                    </div>
                    <div className="category-stats">
                      <div className="stat-group">
                        <span className="stat-label">Brands:</span>
                        <span className="stat-number brands">{category.brands}</span>
                      </div>
                      <div className="stat-group">
                        <span className="stat-label">Influencers:</span>
                        <span className="stat-number influencers">{category.influencers}</span>
                      </div>
                    </div>
                    <div className="category-bar">
                      <div 
                        className="brands-bar" 
                        style={{ width: `${(category.brands / 30) * 100}%` }}
                      ></div>
                      <div 
                        className="influencers-bar" 
                        style={{ width: `${(category.influencers / 250) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Collaboration Monitoring */}
          <section className="dashboard-section">
            <h2>Collaboration Monitoring</h2>
            <div className="collaborations-container">
              <div className="collaborations-header">
                <p>Recently created collaboration requests</p>
              </div>
              <div className="collaborations-list">
                {collaborations.map(collab => (
                  <div key={collab.id} className="collaboration-card">
                    <div className="collab-details">
                      <div className="collab-info">
                        <h4>{collab.brand}</h4>
                        <p className="collab-influencer">with {collab.influencer}</p>
                      </div>
                      <p className="collab-date">{collab.date}</p>
                    </div>
                    <div className="collab-actions">
                      <span className={`collab-status status-${collab.status.toLowerCase()}`}>
                        {collab.status}
                      </span>
                      {collab.status === 'Requested' && (
                        <div className="collab-buttons">
                          <button 
                            className="btn-approve-small"
                            onClick={() => handleApprove(collab.id, 'collab')}
                          >
                            Approve
                          </button>
                          <button 
                            className="btn-reject-small"
                            onClick={() => handleReject(collab.id, 'collab')}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reports & Analytics */}
          <section className="dashboard-section">
            <h2>Reports & Analytics</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Growth Trend</h3>
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '70%' }}></div>
                  <div className="chart-bar" style={{ height: '85%' }}></div>
                  <div className="chart-bar" style={{ height: '75%' }}></div>
                  <div className="chart-bar" style={{ height: '92%' }}></div>
                </div>
                <p className="chart-label">Monthly user growth trend</p>
              </div>

              <div className="analytics-card">
                <h3>Popular Categories</h3>
                <ul className="categories-list">
                  <li>
                    <span>Fashion</span>
                    <span className="count">180 users</span>
                  </li>
                  <li>
                    <span>Beauty</span>
                    <span className="count">221 users</span>
                  </li>
                  <li>
                    <span>Sports</span>
                    <span className="count">156 users</span>
                  </li>
                  <li>
                    <span>Food</span>
                    <span className="count">186 users</span>
                  </li>
                  <li>
                    <span>Tech</span>
                    <span className="count">104 users</span>
                  </li>
                </ul>
              </div>

              <div className="analytics-card">
                <h3>Engagement Stats</h3>
                <div className="engagement-stats">
                  <div className="stat-item">
                    <span className="stat-icon">📧</span>
                    <p>Approved: <strong>24</strong></p>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">⏳</span>
                    <p>Requested: <strong>8</strong></p>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">❌</span>
                    <p>Rejected: <strong>3</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard