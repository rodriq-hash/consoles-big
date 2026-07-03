import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
const Makepayment = () => {
    const location = useLocation()
    const { singleproduct, cartItems, total } = location.state || {}

    const imagepath = "https://rodriquekifaru.alwaysdata.net/static/images/"

    // Check if we're coming from cart or single product
    const isFromCart = cartItems && cartItems.length > 0
    const paymentAmount = isFromCart ? total : (singleproduct?.product_cost || 0)
    const itemsToDisplay = isFromCart ? cartItems : (singleproduct ? [singleproduct] : [])

    // declare the states
    const [phone, setPhone] = useState("")

    // 3 states for posting data
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")
        // create an empty digital envelope
        const formdata = new FormData()
        formdata.append("amount", paymentAmount)
        formdata.append("phone", phone)
        try {
            const response = await axios.post("https://rodriquekifaru.alwaysdata.net/api/mpesa_payment", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className='text-white text-center mb-4'>Make Payment - Lipa Na Mpesa</h1>

                    <div className='card shadow p-4'>
                        <div className="row">
                            {/* Product/Cart Items Display */}
                            <div className="col-md-6">
                                <h3 className="text-primary mb-3">
                                    {isFromCart ? 'Cart Items' : 'Product Details'}
                                </h3>

                                {itemsToDisplay.map((item, index) => (
                                    <div key={index} className="card mb-3 border-0 shadow-sm">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img
                                                    src={imagepath + item.product_photo}
                                                    alt={item.product_name}
                                                    className="img-fluid rounded-start"
                                                    style={{ height: "120px", objectFit: "contain" }}
                                                />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body p-2">
                                                    <h6 className="card-title">{item.product_name}</h6>
                                                    <p className="card-text small text-muted">{item.product_description}</p>
                                                    <p className="card-text fw-bold text-success">Ksh {item.product_cost}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Payment Summary */}
                                <div className="card bg-light mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Payment Summary</h5>
                                        <hr />
                                        {isFromCart && (
                                            <p className="mb-1">Items: <strong>{cartItems.length}</strong></p>
                                        )}
                                        <h4 className="text-success">Total: Ksh {paymentAmount}</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Form */}
                            <div className="col-md-6">
                                <div className="card h-100">
                                    <div className="card-body d-flex flex-column">
                                        <h4 className="card-title text-center mb-4">Complete Your Payment</h4>

                                        {/* binding the states */}
                                        {loading && <h4 className="text-warning text-center">{loading}</h4>}
                                        {success && <h4 className="text-success text-center">{success}</h4>}
                                        {error && <h4 className="text-danger text-center">{error}</h4>}

                                        <form onSubmit={handlesubmit} className="mt-auto">
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                                <input
                                                    type="number"
                                                    id="phone"
                                                    required
                                                    className="form-control form-control-lg"
                                                    placeholder='254xxxxxxxxx'
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                                <div className="form-text">Enter your M-Pesa registered phone number</div>
                                            </div>

                                            <div className="mb-3">
                                                <div className="alert alert-info">
                                                    <strong>Payment Amount: Ksh {paymentAmount}</strong><br />
                                                    You will receive an M-Pesa prompt on your phone to complete the payment.
                                                </div>
                                            </div>

                                            <button type='submit' className='btn btn-success btn-lg w-100'>
                                                Pay Now - Ksh {paymentAmount}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Makepayment