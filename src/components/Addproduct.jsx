import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
    const navigate = useNavigate()
    // declare our states here 
    const [product_name, setProductName] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [product_cost, setProductCost] = useState("")
    const [product_photo, setProductPhoto] = useState("")
    const [preview, setPreview] = useState("")
    // states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSucces] = useState("")
    const [error, setError] = useState("")

    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")
        // create an empty digital envelope 
        const formdata = new FormData()
        formdata.append("product_name", product_name)
        formdata.append("product_description", product_description)
        formdata.append("product_cost", product_cost)
        formdata.append("product_photo", product_photo)

        try {
            const response = await axios.post("http://rodriquekifaru.alwaysdata.net/api/add_product", formdata)
            setSucces(response.data.message)
            setLoading("")
            // Clear form
            setProductName("")
            setProductDescription("")
            setProductCost("")
            setProductPhoto("")
            setPreview("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setProductPhoto(file)
        // Create preview
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const isAdmin = (user) => {
        if (!user) return false
        return user.isAdmin === true && user.email === 'rodriquendeda@gmail.com'
    }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if (!storedUser) {
            navigate('/signin')
            return
        }
        if (!isAdmin(storedUser)) {
            alert('Access Denied! Only the admin can add products.')
            navigate('/')
            return
        }
    }, [navigate])

    return (
        <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh', paddingTop: '20px', paddingBottom: '20px' }}>
                <div className='col-md-6 col-lg-5'>
                    <div className='card shadow-lg border-0 rounded-4 overflow-hidden'>
                        {/* Header */}
                        <div className='bg-primary text-white text-center py-4'>
                            <h1 className='mb-0 fw-bold'>📦 Add New Product</h1>
                            <p className='text-white-50 mt-2 mb-0'>Add gaming products to your store</p>
                        </div>

                        {/* Body */}
                        <div className='card-body p-5'>
                            {/* Status Messages */}
                            {loading && <div className="alert alert-warning alert-dismissible fade show" role="alert">{loading}</div>}
                            {success && <div className="alert alert-success alert-dismissible fade show" role="alert">{success}</div>}
                            {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">{error}</div>}

                            <form onSubmit={handlesubmit}>
                                {/* Product Name */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold text-dark">🎮 Product Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder='e.g., PlayStation 5'
                                        className='form-control form-control-lg'
                                        onChange={(e) => setProductName(e.target.value)}
                                        value={product_name}
                                    />
                                </div>

                                {/* Product Description */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold text-dark">📝 Description</label>
                                    <textarea
                                        required
                                        placeholder='Describe your product features and specifications'
                                        className='form-control form-control-lg'
                                        rows="3"
                                        onChange={(e) => setProductDescription(e.target.value)}
                                        value={product_description}
                                    ></textarea>
                                </div>

                                {/* Product Cost */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold text-dark">💰 Price (Ksh)</label>
                                    <input
                                        type="number"
                                        required
                                        placeholder='Enter product price'
                                        className='form-control form-control-lg'
                                        onChange={(e) => setProductCost(e.target.value)}
                                        value={product_cost}
                                    />
                                </div>

                                {/* Product Photo */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold text-dark">📸 Product Image</label>
                                    <input
                                        type="file"
                                        required
                                        accept='image/*'
                                        className='form-control form-control-lg'
                                        onChange={handleImageChange}
                                    />
                                    <small className="text-muted d-block mt-2">Upload product image (JPG, PNG, WebP)</small>
                                </div>

                                {/* Image Preview */}
                                {preview && (
                                    <div className="mb-4 text-center">
                                        <img
                                            src={preview}
                                            alt="Product preview"
                                            className="img-thumbnail"
                                            style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
                                        />
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type='submit'
                                    className='btn btn-primary btn-lg w-100 fw-bold'
                                    style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)', border: 'none' }}
                                >
                                    Add Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addproduct
