import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'
import axios from 'axios'

const UserRegister = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fullname = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    
    try {
        const response = await axios.post('/api/auth/user/register', { fullname, email, password })
        console.log(response.data) // see success message
    } catch (err) {
        console.log(err.response.data) // see exact error message
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create your account</h2>
          <p>Sign up as a user to explore meals and order seamlessly.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Full name</label>
            <input type="text" placeholder="Jane Doe" />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <div className="actions">
            <button className="btn btn-primary" type="submit">Create account</button>
            <button className="btn btn-ghost" type="button">Cancel</button>
          </div>
        </form>

        <div className="auth-footer">
          <div>Already have an account? <Link className="link" to="/user/login">Sign in</Link></div>
          <div style={{marginTop:8}}>Are you a food partner? <Link className="link" to="/food-partner/register">Partner sign up</Link></div>
        </div>
      </div>
    </div>
  )
}

export default UserRegister