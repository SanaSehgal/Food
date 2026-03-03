import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'

const PartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Partner sign up</h2>
          <p>Register as a food partner to manage your listings and orders.</p>
        </div>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="form-row">
            <label>Business name</label>
            <input type="text" placeholder="e.g., Fresh Bites" />
          </div>

          <div className="form-row">
            <label>Contact email</label>
            <input type="email" placeholder="contact@yourbiz.com" />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <div className="actions">
            <button className="btn btn-primary" type="submit">Create partner account</button>
            <button className="btn btn-ghost" type="button">Cancel</button>
          </div>
        </form>

        <div className="auth-footer">
          <div>Already a partner? <Link className="link" to="/food-partner/login">Sign in</Link></div>
          <div style={{marginTop:8}}>Looking for user account? <Link className="link" to="/user/register">User sign up</Link></div>
        </div>
      </div>
    </div>
  )
}

export default PartnerRegister
