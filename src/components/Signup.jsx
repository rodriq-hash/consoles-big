import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // declare our state here
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  // three states for hosting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [strength, setStrength] = useState("")

  // function to handle submit
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Please wait...")

    // create an empty digital envelope 
    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)
    try {
      const response = await axios.post("http://rodriquekifaru.alwaysdata.net/api/signup", formdata)
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  const checkPasswordStrength = (password) => {
    if (password.length < 4) {
      setStrength("Weak");
    } else if (password.length < 8) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  return (
    <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className='col-md-5 col-lg-4'>
          <div className='card shadow-lg border-0 rounded-4 overflow-hidden'>
            {/* Header */}
            <div className='bg-success text-white text-center py-4'>
              <h1 className='mb-0 fw-bold'>✨ Sign Up</h1>
              <p className='text-white-50 mt-2 mb-0'>Join the gaming revolution</p>
            </div>

            {/* Body */}
            <div className='card-body p-5'>
              {/* Status Messages */}
              {loading && <div className="alert alert-warning alert-dismissible fade show" role="alert">{loading}</div>}
              {success && <div className="alert alert-success alert-dismissible fade show" role="alert">{success}</div>}
              {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">{error}</div>}

              <form onSubmit={handlesubmit}>
                {/* Username Input */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-dark">👤 Username</label>
                  <input
                    type="text"
                    required
                    placeholder='Choose your  username'
                    className='form-control form-control-lg'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-dark">📧 Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder='Enter your email'
                    className='form-control form-control-lg'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-dark">🔑 Password</label>
                  <input
                    type="password"
                    required
                    placeholder='Create a strong password'
                    className='form-control form-control-lg'
                    onChange={(e) => {
                      setPassword(e.target.value);
                      checkPasswordStrength(e.target.value);
                    }}
                    value={password}
                  />
                  {password && (
                    <small
                      className='d-block mt-2 fw-bold'
                      style={{
                        color:
                          strength === "Weak"
                            ? "#dc3545"
                            : strength === "Medium"
                              ? "#ffc107"
                              : "#28a745",
                      }}
                    >
                      Password Strength: {strength}
                    </small>
                  )}
                </div>

                {/* Phone Input */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-dark">📱 Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder='Your phone number'
                    className='form-control form-control-lg'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>

                {/* Sign Up Button */}
                <button
                  type='submit'
                  className='btn btn-success btn-lg w-100 fw-bold mb-3'
                  style={{ background: 'linear-gradient(45deg, #28a745, #20c997)', border: 'none' }}
                >
                  Create Account
                </button>

                {/* Sign In Link */}
                <p className='text-center text-muted'>
                  Already have an account? <Link to="/signin" className='text-success fw-bold text-decoration-none'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup