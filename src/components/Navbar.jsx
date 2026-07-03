import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [user, setUser] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [showCart, setShowCart] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    
    const imagepath = "https://rodriquekifaru.alwaysdata.net/static/images/"

    const isDeveloper = (user) => {
        if (!user) return false
        const developerEmails = [
            'developer@example.com',
            'rodriquekifaru@gmail.com'
        ]
        const developerUsernames = ['admin', 'developer', 'rodrique']
        return developerEmails.includes(user.email) || developerUsernames.includes(user.username)
    }

    useEffect(() => {
        const loggedUSer = JSON.parse(localStorage.getItem("user"))
        setUser(loggedUSer)
        const storedCart = localStorage.getItem('cartItems')
        if (storedCart) {
            setCartItems(JSON.parse(storedCart))
        }
    }, [location])

    // Listen for storage changes to update cart in real-time
    useEffect(() => {
        const handleStorageChange = () => {
            const storedCart = localStorage.getItem('cartItems')
            if (storedCart) {
                setCartItems(JSON.parse(storedCart))
            } else {
                setCartItems([])
            }
        }

        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
        setCartItems([])
        navigate('/')
    }

    const handleViewCart = () => {
        setShowCart(false)
        navigate('/cart')
    }

    return (
        <section className="row">
            <div className="col-md-12">
                {/* <!-- a nav with the navbar content  --> */}
                <nav className="navbar navbar-expand-md shadow-sm" style={{ background: 'linear-gradient(90deg, #0f172a 0%, #1e3a8a 100%)' }}>
                    <div className="container-fluid px-4">
                        <Link to="/" className="navbar-brand d-flex align-items-center text-white fw-bold" style={{ letterSpacing: '0.05em' }}>
                            <div className="me-2" style={{ fontSize: '1.8rem' }}>🎮</div>
                            <div>
                                <div style={{ fontSize: '1.05rem' }}>Rodrique's</div>
                                <div style={{ fontSize: '0.9rem', lineHeight: '1.1' }}>Gaming Store</div>
                            </div>
                        </Link>
                        <button className="navbar-toggler border-0" type="button" data-bs-target="#navbarcollapse" data-bs-toggle="collapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                        </button>

                        {/* <!-- a division containing the links  --> */}
                        <div className="collapse navbar-collapse" id="navbarcollapse">
                            <div className="navbar-nav ms-auto align-items-center">
                                <Link to="/" className="nav-link text-white px-3">Home</Link>
                                {user && <Link to="/products" className="nav-link text-white px-3">Shop</Link>}
                                {isDeveloper(user) && <Link to="/addproduct" className="nav-link text-white px-3">Add product</Link>}
                                {user ? (
                                    <>
                                        <span className="nav-link text-white px-3">Hello, {user.username}</span>
                                        <button type="button" onClick={logout} className="btn btn-outline-light btn-sm ms-2 px-3 py-2">
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/signin" className="nav-link text-white px-3">Signin</Link>
                                        <Link to="/signup" className="nav-link text-white px-3">Signup</Link>
                                    </>
                                )}

                                {user && (
                                    <div style={{ position: 'relative', marginLeft: '16px' }}>
                                        <button
                                            onClick={() => setShowCart(!showCart)}
                                            className="btn btn-light btn-sm rounded-circle p-2"
                                            style={{
                                                width: '44px',
                                                height: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.1rem' }}>🛒</span>
                                            {cartItems.length > 0 && (
                                                <span
                                                    style={{
                                                        position: 'absolute',
                                                        top: '-6px',
                                                        right: '-6px',
                                                        background: '#f97316',
                                                        color: '#fff',
                                                        borderRadius: '50%',
                                                        width: '22px',
                                                        height: '22px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '12px',
                                                        fontWeight: '700',
                                                        boxShadow: '0 0 0 2px rgba(255,255,255,0.75)'
                                                    }}
                                                >
                                                    {cartItems.length}
                                                </span>
                                            )}
                                        </button>

                                        {/* Cart Dropdown */}
                                        {showCart && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50px',
                                                    right: '0',
                                                    background: '#0f172a',
                                                    border: '1px solid rgba(148,163,184,0.2)',
                                                    borderRadius: '16px',
                                                    boxShadow: '0 20px 50px rgba(15,23,42,0.2)',
                                                    zIndex: 1001,
                                                    minWidth: '320px',
                                                    maxHeight: '420px',
                                                    overflowY: 'auto'
                                                }}
                                            >
                                            <div style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                                                <h6 style={{ margin: '0', fontWeight: 'bold' }}>Shopping Cart ({cartItems.length})</h6>
                                            </div>

                                            {cartItems.length === 0 ? (
                                                <div style={{ padding: '20px', textAlign: 'center', color: '#cbd5e1' }}>
                                                    Your cart is empty
                                                </div>
                                            ) : (
                                                <>
                                                    <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                                        {cartItems.map((item, index) => (
                                                            <div
                                                                key={index}
                                                                style={{
                                                                    padding: '12px 16px',
                                                                    borderBottom: '1px solid rgba(148,163,184,0.2)',
                                                                    display: 'flex',
                                                                    gap: '12px',
                                                                    alignItems: 'flex-start'
                                                                }}
                                                            >
                                                                <img
                                                                    src={imagepath + item.product_photo}
                                                                    alt={item.product_name}
                                                                    style={{
                                                                        width: '42px',
                                                                        height: '42px',
                                                                        objectFit: 'contain',
                                                                        backgroundColor: '#e2e8f0',
                                                                        borderRadius: '8px',
                                                                        display: 'block'
                                                                    }}
                                                                    onError={(e) => {
                                                                        e.target.src = "https://via.placeholder.com/42x42?text=No+Image";
                                                                        e.target.style.objectFit = "cover";
                                                                    }}
                                                                    loading="lazy"
                                                                />
                                                                <div style={{ flex: 1 }}>
                                                                    <p style={{ margin: '0', fontSize: '13px', fontWeight: '600', color: '#f8fafc' }}>
                                                                        {item.product_name}
                                                                    </p>
                                                                    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#cbd5e1' }}>
                                                                        Ksh {item.product_cost}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div style={{ padding: '15px', borderTop: '1px solid rgba(148,163,184,0.2)' }}>
                                                        <button
                                                            onClick={handleViewCart}
                                                            style={{
                                                                width: '100%',
                                                                padding: '11px',
                                                                background: '#22c55e',
                                                                color: '#0f172a',
                                                                border: 'none',
                                                                borderRadius: '10px',
                                                                cursor: 'pointer',
                                                                fontWeight: '700'
                                                            }}
                                                        >
                                                            View Cart
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </section>
    )
}

export default Navbar