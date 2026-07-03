import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
import Footer from './Footer';
const Getproduct = () => {
  let navigate = useNavigate();
  // declare our states here
  const [loading, setLoading] = useState('')
  const [products, setProduct] = useState([])
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [user, setUser] = useState(null);
  // function to search products 
  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );
  // SORTING LOGIC GOES HERE
  const sorted_products = [...filtered_products].sort((a, b) => {
    if (sortOption === "price_low_high") {
      return a.product_cost - b.product_cost;
    }
    if (sortOption === 'price_high_low') {
      return b.product_cost - a.product_cost;
    }
    if (sortOption === "name_asc") {
      return a.product_name.localeCompare(b.product_name)
    }
    if (sortOption === "name_desc") {
      return b.product_name.localeCompare(a.product_name)
    }
    return 0;
  });

  // function to get products 
  const getproducts = async () => {
    setLoading("Please wait...")

    try {
      const response = await axios.get("http://rodriquekifaru.alwaysdata.net/api/getproducts")
      setProduct(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }
  // call the function 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (!storedUser) {
      navigate('/signin')
      return
    }
    setUser(storedUser)
    getproducts()
  }, [navigate])

  console.log(products)
  const imagepath = "http://rodriquekifaru.alwaysdata.net/static/images/"

  // Function to add product to cart
  const addToCart = (product) => {
    if (!user) {
      navigate('/signin')
      return
    }

    // Get existing cart items from localStorage
    const existingCart = localStorage.getItem('cartItems');
    let cartItems = existingCart ? JSON.parse(existingCart) : [];
    
    // Add new product to cart
    cartItems.push(product);
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* carousel goes here */}
        <Carousel />
        
        {/* HEADER SECTION */}
        <div className='col-12' style={{
          backgroundColor: "linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)",
          background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)",
          padding: "50px 20px",
          marginTop: "0",
          borderRadius: "0 0 16px 16px",
          marginBottom: "30px"
        }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ 
              fontSize: "3rem", 
              fontWeight: "800", 
              color: "#0052a3",
              marginBottom: "0.5rem",
              letterSpacing: "-0.5px"
            }}>
              🎮 Gaming Console Collection
            </h1>
            <p style={{ 
              fontSize: "1.3rem", 
              color: "#0066cc",
              marginBottom: "0",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Discover the latest gaming consoles and premium equipment
            </p>
          </div>
        </div>

        {/* SEARCH AND SORT UI */}
        <div className='col-12 mb-4'>
          <div className='row justify-content-center align-items-end gap-3' style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            border: "1px solid #e0e0e0"
          }}>
            {/* Search Input */}
            <div className='col-md-5'>
              <label style={{ 
                fontWeight: "700", 
                marginBottom: "0.8rem", 
                display: "block", 
                color: "#1a1a1a",
                fontSize: "1.05rem"
              }}>
                🔍 Search Products
              </label>
              <input
                className='form-control'
                type='search'
                placeholder='Search by name or description...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  padding: "14px 18px",
                  fontSize: "1rem",
                  border: "2px solid #e0e0e0",
                  borderRadius: "10px",
                  transition: "all 0.3s",
                  backgroundColor: "#f8f9fa",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#0066cc";
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,102,204,0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e0e0e0";
                  e.target.style.backgroundColor = "#f8f9fa";
                  e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
                }}
              />
            </div>

            {/* Sort Dropdown */}
            <div className='col-md-4'>
              <label style={{ 
                fontWeight: "700", 
                marginBottom: "0.8rem", 
                display: "block", 
                color: "#1a1a1a",
                fontSize: "1.05rem"
              }}>
                ⚙️ Sort By
              </label>
              <select
                className='form-control'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{
                  padding: "14px 18px",
                  fontSize: "1rem",
                  border: "2px solid #e0e0e0",
                  borderRadius: "10px",
                  cursor: "pointer",
                  backgroundColor: "#f8f9fa",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#0066cc";
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,102,204,0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e0e0e0";
                  e.target.style.backgroundColor = "#f8f9fa";
                  e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
                }}
              >
                <option value="">All Products</option>
                <option value="price_low_high">💰 Price: Low - High</option>
                <option value="price_high_low">💎 Price: High - Low</option>
                <option value="name_asc">A→Z Name</option>
                <option value="name_desc">Z→A Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Status Messages */}
        {loading && (
          <div className='col-12 mb-3'>
            <div className='alert alert-info text-center' style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              ⏳ {loading}
            </div>
          </div>
        )}
        {error && (
          <div className='col-12 mb-3'>
            <div className='alert alert-danger text-center' style={{ fontSize: "1.1rem" }}>
              ⚠️ {error}
            </div>
          </div>
        )}

        {/* Products Grid */}
        {sorted_products.slice(0, visibleCount).map((singleproduct, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='card shadow-sm h-100 d-flex flex-column' style={{
              borderRadius: "12px",
              border: "none",
              transition: "all 0.3s ease",
              overflow: "hidden",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
            >
              {/* Product Image Container */}
              <div style={{ 
                height: "250px", 
                overflow: "hidden", 
                position: "relative",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img
                  src={imagepath + singleproduct.product_photo}
                  alt={singleproduct.product_name}
                  className="w-100"
                  style={{
                    height: "100%",
                    objectFit: "contain",
                    padding: "10px",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x250?text=No+Image";
                    e.target.style.objectFit = "cover";
                  }}
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column flex-grow-1" style={{ 
                backgroundColor: "#fff",
                padding: "18px"
              }}>
                {/* Product Name */}
                <h5 className="card-title" style={{ 
                  minHeight: "50px", 
                  display: "flex", 
                  alignItems: "center",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  color: "#1a1a1a",
                  marginBottom: "10px"
                }}>
                  {singleproduct.product_name}
                </h5>

                {/* Product Description */}
                <p className="card-text flex-grow-1" style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minHeight: "50px",
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: "1.4",
                  marginBottom: "15px"
                }}>
                  {singleproduct.product_description}
                </p>

                {/* Price Section */}
                <div className="mt-auto">
                  <div style={{
                    backgroundColor: "#f0f7ff",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "12px",
                    textAlign: "center"
                  }}>
                    <span style={{ 
                      fontSize: "0.85rem", 
                      color: "#666",
                      display: "block"
                    }}>Price</span>
                    <span style={{ 
                      fontSize: "1.8rem", 
                      fontWeight: "700",
                      color: "#0066cc"
                    }}>
                      Ksh {singleproduct.product_cost}
                    </span>
                  </div>

                  {/* Buttons */}
                  <button 
                    className='btn w-100 mb-2' 
                    onClick={() => navigate("/makepayment", { state: { singleproduct } })}
                    style={{
                      backgroundColor: "#ff6b35",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px",
                      fontWeight: "600",
                      transition: "all 0.2s",
                      fontSize: "0.95rem"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#ff5220";
                      e.target.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#ff6b35";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    💳 Purchase Now
                  </button>

                  <button 
                    className='btn w-100' 
                    onClick={() => addToCart(singleproduct)}
                    style={{
                      backgroundColor: "#00b894",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px",
                      fontWeight: "600",
                      transition: "all 0.2s",
                      fontSize: "0.95rem"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#00a076";
                      e.target.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#00b894";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filtered_products.length && (
        <div className="row">
          <div className="col-12 text-center mt-4 mb-4">
            <button
              className='btn'
              onClick={() => setVisibleCount(visibleCount + 8)}
              style={{
                backgroundColor: "#0066cc",
                color: "white",
                border: "none",
                padding: "12px 40px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0052a3";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0066cc";
                e.target.style.transform = "scale(1)";
              }}
            >
              📦 Load More Products
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Getproduct