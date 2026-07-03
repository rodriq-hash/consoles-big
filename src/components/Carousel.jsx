import React from 'react'

const Carousel = () => {
    return (
        <section className="row">
            <div className="col-md-12">
                {/* <!-- a division with carousel content --> */}
                <div className="carousel carousel-fade slide" data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- indicators --> */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>

                    {/* <!-- inner division --> */}
                    <div className="carousel-inner">
                        {/* <!-- division with image 1 --> */}
                        <div className="carousel-item active" style={{ height: '300px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=500&fit=crop&crop=center"
                                alt="Gaming Consoles Collection - PS5, Xbox, Nintendo"
                                className="d-block w-100"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-white fw-bold">Welcome to Rodrique's Gaming Store</h2>
                                <p className="text-white">Discover the latest gaming consoles and accessories</p>
                            </div>
                        </div>

                        {/* <!-- division with image 2 --> */}
                        <div className="carousel-item" style={{ height: '300px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&h=500&fit=crop&crop=center"
                                alt="PlayStation 5 Console - Next Gen Gaming"
                                className="d-block w-100"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-white fw-bold">PlayStation 5</h2>
                                <p className="text-white">Experience next-generation gaming with ultra-fast SSD and 4K graphics</p>
                            </div>
                        </div>

                        {/* <!-- division with image 3 --> */}
                        <div className="carousel-item" style={{ height: '300px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=1200&h=500&fit=crop&crop=center"
                                alt="Xbox Series X - Powerful Gaming Console"
                                className="d-block w-100"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-white fw-bold">Xbox Series X</h2>
                                <p className="text-white">The most powerful Xbox ever with 4K gaming and Game Pass</p>
                            </div>
                        </div>

                        {/* <!-- division with image 4 --> */}
                        <div className="carousel-item" style={{ height: '300px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=500&fit=crop&crop=center"
                                alt="Nintendo Switch - Hybrid Gaming Console"
                                className="d-block w-100"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-white fw-bold">Nintendo Switch</h2>
                                <p className="text-white">Play anywhere, anytime with the versatile hybrid console</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- previous control --> */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-success" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    {/* <!-- next control --> */}
                    <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-success" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Carousel