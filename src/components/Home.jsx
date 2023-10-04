import React from 'react'
import Navigationbar from './Navigationbar'

const Home = () => {
    return (
        <div>
<Navigationbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="..." className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="..." className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="..." className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home