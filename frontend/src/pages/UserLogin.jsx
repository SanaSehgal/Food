import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      const response = await axios.post('/api/auth/user/login', { email, password })
      console.log(response.data) // see success message
      navigate('/') // ✅ redirect to home after login
    } catch (err) {
      console.log(err.response.data) // see exact error message
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome back</h2>
          <p>Sign in to continue to your account.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="Your password" />
          </div>

          <div className="actions">
            <button className="btn btn-primary" type="submit">Sign in</button>
            <Link to="/user/register" className="btn btn-ghost">Create account</Link>
          </div>
        </form>

        <div className="auth-footer">
          <div>Don't have an account? <Link className="link" to="/user/register">Sign up</Link></div>
          <div style={{marginTop:8}}>Food partner? <Link className="link" to="/food-partner/login">Partner sign in</Link></div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin