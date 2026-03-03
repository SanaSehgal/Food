import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'

const PartnerLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Partner sign in</h2>
          <p>Access your partner dashboard and manage orders.</p>
        </div>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="form-row">
            <label>Email</label>
            <input type="email" placeholder="partner@biz.com" />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="Your password" />
          </div>

          <div className="actions">
            <button className="btn btn-primary" type="submit">Sign in</button>
            <Link to="/food-partner/register" className="btn btn-ghost">Partner sign up</Link>
          </div>
        </form>

        <div className="auth-footer">
          <div>Need a user account? <Link className="link" to="/user/login">User sign in</Link></div>
        </div>
      </div>
    </div>
  )
}

export default PartnerLogin
