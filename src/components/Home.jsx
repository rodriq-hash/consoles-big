import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0">
      {/* Carousel */}
      <Carousel />

      {/* Hero Section with CTA */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold text-white mb-3">
            Welcome to Rodrique's Gaming Store
          </h2>
          <p className="lead text-white mb-4">
            Discover premium gaming consoles, exclusive deals, and join the gaming revolution
          </p>
          <button
            className="btn btn-light btn-lg me-3 mb-2"
            onClick={() => navigate('/signin')}
          >
            🔐 Sign In
          </button>
          <button
            className="btn btn-success btn-lg mb-2"
            onClick={() => navigate('/products')}
          >
            🛍️ Shop Now
          </button>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="marquee-section py-3">
        <div className="marquee-content">
          <span className="me-5">🔥 New arrivals just dropped — grab the latest consoles before they sell out!</span>
          <span className="me-5">💥 Free delivery on orders over Ksh 10,000 across Kenya.</span>
          <span className="me-5">🎁 Sign in now for exclusive discounts and member-only bundles.</span>
          <span className="me-5">🚚 Fast shipping, secure checkout, and genuine gaming gear.</span>
        </div>
      </section>

      {/* Browser Support Section */}
      <section className="py-5" style={{ background: 'linear-gradient(90deg, #111827 0%, #1f2937 100%)' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4 text-white">Works Perfectly on All Browsers</h2>
          <p className="text-center text-secondary mb-5">
            Our storefront is optimized for Chrome, Firefox, Edge, and Safari — built to look great on desktop and mobile.
          </p>
          <div className="row justify-content-center g-4">
            <div className="col-6 col-md-3 text-center">
              <div className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#1f2937' }}>
                <div className="mb-3" style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                  <svg viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="40" fill="#4285F4" />
                    <path d="M50 50 L50 10 A40 40 0 0 1 90 50 Z" fill="#EA4335" />
                    <path d="M50 50 L90 50 A40 40 0 0 1 50 90 Z" fill="#FBBC05" />
                    <path d="M50 50 L50 90 A40 40 0 0 1 10 50 Z" fill="#34A853" />
                    <circle cx="50" cy="50" r="18" fill="#fff" />
                  </svg>
                </div>
                <h6 className="mb-0 text-white">Chrome</h6>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center">
              <div className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#1f2937' }}>
                <div className="mb-3" style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                  <svg viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="40" fill="#FF7139" />
                    <path d="M30 70 Q50 90 70 70 Q60 50 90 40 Q70 30 50 40 Q30 20 30 40 Q10 45 30 70 Z" fill="#FF9B2A" />
                    <path d="M50 40 Q60 20 80 25 Q70 40 50 40 Z" fill="#fff" opacity="0.55" />
                  </svg>
                </div>
                <h6 className="mb-0 text-white">Firefox</h6>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center">
              <div className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#1f2937' }}>
                <div className="mb-3" style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                  <svg viewBox="0 0 100 100" width="80" height="80">
                    <path d="M50 10 A40 40 0 0 1 90 50 L70 50 A20 20 0 1 0 50 30 Z" fill="#0078D7" />
                    <path d="M10 50 A40 40 0 0 1 50 10 L50 30 A20 20 0 0 0 30 50 Z" fill="#00B0FF" />
                    <path d="M90 50 A40 40 0 0 1 50 90 L50 70 A20 20 0 0 0 70 50 Z" fill="#00A857" />
                    <path d="M50 90 A40 40 0 0 1 10 50 L30 50 A20 20 0 1 0 50 70 Z" fill="#001E3C" />
                  </svg>
                </div>
                <h6 className="mb-0 text-white">Edge</h6>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center">
              <div className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#1f2937' }}>
                <div className="mb-3" style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                  <svg viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="40" fill="#8DB8E8" />
                    <circle cx="50" cy="50" r="24" fill="#fff" />
                    <path d="M50 20 L54 50 L80 54 L54 58 L50 90 L46 58 L20 54 L46 50 Z" fill="#1D4ED8" />
                    <circle cx="50" cy="50" r="10" fill="#1D4ED8" />
                  </svg>
                </div>
                <h6 className="mb-0 text-white">Safari</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center">
                <div className="card-body">
                  <h3 style={{ fontSize: '3rem' }}>🚀</h3>
                  <h5 className="card-title fw-bold">Fast Delivery</h5>
                  <p className="card-text">Quick and reliable shipping to your doorstep</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center">
                <div className="card-body">
                  <h3 style={{ fontSize: '3rem' }}>💰</h3>
                  <h5 className="card-title fw-bold">Best Prices</h5>
                  <p className="card-text">Competitive pricing with exclusive deals</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center">
                <div className="card-body">
                  <h3 style={{ fontSize: '3rem' }}>✅</h3>
                  <h5 className="card-title fw-bold">Authentic Products</h5>
                  <p className="card-text">100% genuine gaming consoles and accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Consoles Showcase */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark">Popular Gaming Consoles</h2>
          <div className="row g-4">
            {/* PS5 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 overflow-hidden">
                <div className="bg-primary text-white p-4 text-center">
                  <h1 style={{ fontSize: '2.5rem', margin: 0 }}>🎮</h1>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">PlayStation 5</h5>
                  <p className="text-muted small">Next-gen gaming experience</p>
                  <div className="mb-3">
                    <span className="badge bg-success">From Ksh 399</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm" onClick={() => navigate('/products')}>
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Xbox */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 overflow-hidden">
                <div className="bg-success text-white p-4 text-center">
                  <h1 style={{ fontSize: '2.5rem', margin: 0 }}>🕹️</h1>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Xbox Series X</h5>
                  <p className="text-muted small">Power your gaming</p>
                  <div className="mb-3">
                    <span className="badge bg-success">From Ksh 299</span>
                  </div>
                  <button className="btn btn-outline-success btn-sm" onClick={() => navigate('/products')}>
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Nintendo */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 overflow-hidden">
                <div className="bg-danger text-white p-4 text-center">
                  <h1 style={{ fontSize: '2.5rem', margin: 0 }}>🎯</h1>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Nintendo Switch</h5>
                  <p className="text-muted small">Play anywhere, anytime</p>
                  <div className="mb-3">
                    <span className="badge bg-success">From Ksh 199</span>
                  </div>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => navigate('/products')}>
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* More Products */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 overflow-hidden">
                <div className="bg-warning text-white p-4 text-center">
                  <h1 style={{ fontSize: '2.5rem', margin: 0 }}>⭐</h1>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Accessories</h5>
                  <p className="text-muted small">Controllers and more</p>
                  <div className="mb-3">
                    <span className="badge bg-success">Exclusive Deals</span>
                  </div>
                  <button className="btn btn-outline-warning btn-sm" onClick={() => navigate('/products')}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <h2 className="fw-bold display-6">500+</h2>
              <p className="text-warning">Products</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold display-6">10K+</h2>
              <p className="text-warning">Happy Customers</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold display-6">24/7</h2>
              <p className="text-warning">Customer Support</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold display-6">99%</h2>
              <p className="text-warning">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark">About Rodrique's Gaming Store</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h4 className="fw-bold text-primary mb-3">Your Ultimate Gaming Destination</h4>
              <p className="mb-3">
                At Rodrique's Gaming Store, we believe that gaming is more than just entertainment—it's a passion. 
                We're dedicated to bringing you the latest and greatest gaming consoles, accessories, and experiences.
              </p>
              <p className="mb-3">
                With over a decade of experience in the gaming industry, we pride ourselves on:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✨ Curated selection of premium gaming products</li>
                <li className="mb-2">✨ Competitive pricing and exclusive deals</li>
                <li className="mb-2">✨ Expert customer service and support</li>
                <li className="mb-2">✨ Fast and secure checkout process</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="bg-primary text-white p-5 rounded text-center">
                <h1 style={{ fontSize: '4rem', margin: 0 }}>🎮</h1>
                <h4 className="mt-3 fw-bold">Gaming Excellence Since 2015</h4>
                <p>Trusted by thousands of gamers worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign In / Sign Up Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark">Join Our Gaming Community</h2>
          <div className="row g-4">
            {/* Sign In Card */}
            <div className="col-md-6">
              <div className="card h-100 shadow-lg border-0">
                <div className="card-body text-center p-5">
                  <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>🔐</h1>
                  <h4 className="card-title fw-bold mb-3">Already Have an Account?</h4>
                  <p className="card-text text-muted mb-4">
                    Sign in to access your orders, saved items, and exclusive member deals
                  </p>
                  <button
                    className="btn btn-primary btn-lg w-100"
                    onClick={() => navigate('/signin')}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>

            {/* Sign Up Card */}
            <div className="col-md-6">
              <div className="card h-100 shadow-lg border-0">
                <div className="card-body text-center p-5">
                  <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>✨</h1>
                  <h4 className="card-title fw-bold mb-3">New to Gaming Hub?</h4>
                  <p className="card-text text-muted mb-4">
                    Create an account to enjoy exclusive deals, fast checkout, and personalized recommendations
                  </p>
                  <button
                    className="btn btn-success btn-lg w-100"
                    onClick={() => navigate('/signup')}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-white mb-4">Ready to Upgrade Your Gaming Setup?</h2>
          <button
            className="btn btn-light btn-lg"
            onClick={() => navigate('/signup')}
          >
            Create an Account & Start Shopping
          </button>
        </div>
      </section>

      {/* Products Section (visible on scroll) */}
      <section id="products" className="py-5">
        {/* Products will be loaded here by importing Getproduct */}
      </section>
    </div>
  );
};

export default Home;
