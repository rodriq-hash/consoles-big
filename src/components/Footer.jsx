import React, { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    const adminEmail = 'rodriquendeda@gmail.com'
    const adminPhone = '+254703306213'

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!email || !phone || !message) {
            setStatus('Please fill in email, phone number, and message before sending.')
            return
        }

        const subject = 'Website Contact Form Message'
        const body = `Email: ${email}\nPhone: ${phone}\n\n${message}`
        const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        setStatus(`Opening your email client now. Your message will be sent to ${adminEmail} and you can also reach us on ${adminPhone}.`)
        window.location.href = mailtoLink
    }

    return (
        <footer style={{ background: 'linear-gradient(90deg, #0f172a 0%, #1e3a8a 100%)', color: '#e2e8f0' }}>
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-md-4">
                        <h5 className="text-white mb-3">About Us</h5>
                        <p className="mb-0" style={{ color: '#cbd5e1' }}>
                            We deliver the best gaming gear nationwide with comfort and customer-first service.
                            Find exclusive offers, reliable support, and fast delivery across Kenya.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5 className="text-white mb-3">Contact Us</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="form-control form-control-sm bg-slate-900 text-white border-0"
                                    style={{ backgroundColor: '#1e293b' }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="form-control form-control-sm bg-slate-900 text-white border-0"
                                    style={{ backgroundColor: '#1e293b' }}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    placeholder="Leave a comment"
                                    rows="3"
                                    className="form-control form-control-sm bg-slate-900 text-white border-0"
                                    style={{ backgroundColor: '#1e293b' }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning btn-sm px-4">
                                Send Message
                            </button>
                        </form>
                        {status && (
                            <div className="mt-3 px-3 py-2 rounded" style={{ backgroundColor: 'rgba(148,163,184,0.15)', color: '#d1d5db' }}>
                                {status}
                            </div>
                        )}
                        <div className="mt-3" style={{ color: '#cbd5e1' }}>
                            Admin email: <a href={`mailto:${adminEmail}`} style={{ color: '#f59e0b' }}>{adminEmail}</a><br />
                            Admin phone: <a href={`tel:${adminPhone}`} style={{ color: '#f59e0b' }}>{adminPhone}</a><br />
                            <a href={`sms:${adminPhone}?body=${encodeURIComponent('Hello, I would like to enquire about your gaming products.')}`} className="btn btn-outline-warning btn-sm mt-2" style={{ color: '#f59e0b', borderColor: '#f59e0b' }}>
                                Send SMS
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h5 className="text-white mb-3">Stay Connected</h5>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-white">
                                <img src="images/fb.png" alt="Facebook" width="32" height="32" />
                            </a>
                            <a href="https://www.instagram.com/your_i_ts._ndedaaa" target="_blank" rel="noreferrer" className="text-white">
                                <img src="images/in.png" alt="Instagram" width="32" height="32" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-white">
                                <img src="images/x.png" alt="Twitter" width="32" height="32" />
                            </a>
                        </div>
                        <p style={{ color: '#cbd5e1' }}>
                            Not close to a store? No problem — order online and let us deliver your favorite consoles and accessories directly to you.
                        </p>
                    </div>
                </div>

                <div className="text-center pt-4 mt-4 border-top" style={{ borderColor: 'rgba(148,163,184,0.2)' }}>
                    <small style={{ color: '#94a3b8' }}>© 2026 Rodrique's Gaming Store. All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer