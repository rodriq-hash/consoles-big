import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const imagepath = "https://rodriquekifaru.alwaysdata.net/static/images/";

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.product_cost, 0);

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Header */}
        <div className='col-12 mt-5 mb-4'>
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "700", 
            color: "#1a1a1a"
          }}>
            🛒 Shopping Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className='col-12'>
            <div style={{
              textAlign: "center",
              padding: "60px 20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "12px",
              marginTop: "20px"
            }}>
              <h2 style={{ color: "#999", fontSize: "1.8rem", marginBottom: "20px" }}>
                📭 Your cart is empty
              </h2>
              <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
                Add some amazing gaming consoles to get started!
              </p>
              <button
                className='btn'
                onClick={() => navigate('/products')}
                style={{
                  backgroundColor: "#0066cc",
                  color: "white",
                  padding: "12px 40px",
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  border: "none",
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
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className='col-12'>
              {/* Cart Items Table */}
              <div style={{
                overflowX: "auto",
                marginBottom: "30px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}>
                <table className='table table-hover' style={{ marginBottom: "0" }}>
                  <thead style={{ backgroundColor: "#1a1a1a", color: "white" }}>
                    <tr>
                      <th style={{ padding: "16px", fontSize: "1rem", fontWeight: "600" }}>Product Image</th>
                      <th style={{ padding: "16px", fontSize: "1rem", fontWeight: "600" }}>Product Name</th>
                      <th style={{ padding: "16px", fontSize: "1rem", fontWeight: "600" }}>Description</th>
                      <th style={{ padding: "16px", fontSize: "1rem", fontWeight: "600" }}>Price</th>
                      <th style={{ padding: "16px", fontSize: "1rem", fontWeight: "600" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index} style={{ 
                        borderBottom: "1px solid #eee",
                        transition: "background-color 0.3s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f7ff"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        <td style={{ padding: "16px", verticalAlign: "middle" }}>
                          <img
                            src={imagepath + item.product_photo}
                            alt={item.product_name}
                            style={{
                              height: '100px',
                              width: '100px',
                              objectFit: 'contain',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '8px',
                              display: 'block',
                              padding: "5px"
                            }}
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/100x100?text=No+Image";
                              e.target.style.objectFit = "cover";
                            }}
                            loading="lazy"
                          />
                        </td>
                        <td style={{ padding: "16px", verticalAlign: "middle", fontWeight: "600", color: "#1a1a1a" }}>
                          {item.product_name}
                        </td>
                        <td style={{ padding: "16px", verticalAlign: "middle", color: "#666", maxWidth: "300px" }}>
                          {item.product_description}
                        </td>
                        <td style={{ padding: "16px", verticalAlign: "middle", fontWeight: "700", fontSize: "1.1rem", color: "#0066cc" }}>
                          Ksh {item.product_cost}
                        </td>
                        <td style={{ padding: "16px", verticalAlign: "middle" }}>
                          <button
                            className='btn btn-sm'
                            onClick={() => removeFromCart(index)}
                            style={{
                              backgroundColor: "#ff6b35",
                              color: "white",
                              border: "none",
                              borderRadius: "6px",
                              padding: "8px 16px",
                              fontWeight: "600",
                              cursor: "pointer",
                              transition: "all 0.2s"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#ff5220";
                              e.target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "#ff6b35";
                              e.target.style.transform = "scale(1)";
                            }}
                          >
                            ✕ Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cart Summary Section */}
              <div className='row' style={{ gap: "20px" }}>
                <div className='col-md-8'></div>
                <div className='col-md-3'>
                  <div style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderTop: "4px solid #0066cc"
                  }}>
                    <h4 style={{ 
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      marginBottom: "20px"
                    }}>
                      📊 Cart Summary
                    </h4>
                    <hr style={{ margin: "15px 0", borderColor: "#eee" }} />
                    
                    <div style={{ marginBottom: "15px" }}>
                      <p style={{ color: "#666", fontSize: "0.95rem", marginBottom: "5px" }}>Total Items</p>
                      <h5 style={{ 
                        fontSize: "1.8rem", 
                        fontWeight: "700", 
                        color: "#0066cc",
                        margin: "0"
                      }}>
                        {cartItems.length}
                      </h5>
                    </div>

                    <div style={{
                      backgroundColor: "#f0f7ff",
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "20px"
                    }}>
                      <p style={{ color: "#666", fontSize: "0.95rem", marginBottom: "5px" }}>Total Amount</p>
                      <h3 style={{ 
                        fontSize: "2rem", 
                        fontWeight: "700", 
                        color: "#00b894",
                        margin: "0"
                      }}>
                        Ksh {total}
                      </h3>
                    </div>

                    <button
                      className='btn w-100 mb-2'
                      onClick={() => navigate('/makepayment', { state: { cartItems, total } })}
                      style={{
                        backgroundColor: "#00b894",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px",
                        fontSize: "1rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s"
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
                      ✓ Proceed to Checkout
                    </button>

                    <button
                      className='btn w-100 mb-2'
                      onClick={clearCart}
                      style={{
                        backgroundColor: "transparent",
                        color: "#ff6b35",
                        border: "2px solid #ff6b35",
                        borderRadius: "8px",
                        padding: "10px",
                        fontSize: "1rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#ff6b35";
                        e.target.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#ff6b35";
                      }}
                    >
                      🗑️ Clear Cart
                    </button>

                    <button
                      className='btn w-100'
                      onClick={() => navigate('/products')}
                      style={{
                        backgroundColor: "transparent",
                        color: "#0066cc",
                        border: "2px solid #0066cc",
                        borderRadius: "8px",
                        padding: "10px",
                        fontSize: "1rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#0066cc";
                        e.target.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#0066cc";
                      }}
                    >
                      🛍️ Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
