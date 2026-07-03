import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signin = () => {
    // declare our states here
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // states for hosting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    // Admin credentials
    const ADMIN_EMAIL = 'rodriquendeda@gmail.com'
    const ADMIN_PASSWORD = "mum's boy @#"

    // function to handle submit
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        // Check if admin login
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            const adminUser = {
                email: email,
                username: 'admin',
                isAdmin: true
            }
            localStorage.setItem("user", JSON.stringify(adminUser))
            setSuccess("Admin login successful!")
            setLoading("")
            navigate("/addproduct")
            return
        }

        //   create an empty envelope 
        const formdata = new FormData()
        formdata.append('email', email)
        formdata.append('password', password)
        try {
            const response = await axios.post("https://rodriquekifaru.alwaysdata.net/api/signin", formdata)
            setSuccess(response.data.message)
            setLoading("")
            if (response.data.user) {
                // Mark as regular user (not admin)
                const userData = {...response.data.user, isAdmin: false}
                localStorage.setItem("user", JSON.stringify(userData))
                navigate("/")
            }

        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    return (
        <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className='col-md-5 col-lg-4'>
                    <div className='card shadow-lg border-0 rounded-4 overflow-hidden'>
                        {/* Header */}
                        <div className='bg-dark text-white text-center py-4'>
                            <h1 className='mb-0 fw-bold'>🎮 Sign In</h1>
                            <p className='text-muted mt-2 mb-0'>Welcome back to Rodrique's Gaming Store</p>
                        </div>

                        {/* Body */}
                        <div className='card-body p-5'>
                            {/* Status Messages */}
                            {loading && <div className="alert alert-warning alert-dismissible fade show" role="alert">{loading}</div>}
                            {success && <div className="alert alert-success alert-dismissible fade show" role="alert">{success}</div>}
                            {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">{error}</div>}

                            <form onSubmit={handlesubmit}>
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
                                <div className="mb-4">
                                    <label className="form-label fw-bold text-dark">🔑 Password</label>
                                    <input
                                        type="password"
                                        required
                                        placeholder='Enter your password'
                                        className='form-control form-control-lg'
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>

                                {/* Sign In Button */}
                                <button
                                    type='submit'
                                    className='btn btn-primary btn-lg w-100 fw-bold mb-3'
                                    style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)', border: 'none' }}
                                >
                                    Sign In
                                </button>

                                {/* Sign Up Link */}
                                <p className='text-center text-muted'>
                                    Don't have an account? <Link to="/signup" className='text-primary fw-bold text-decoration-none'>Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin