import React from 'react'

const Navigationbar = () => {
    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                    <div className="container-fluid">
                                        <a className="navbar-brand" href="#">Boardband Site</a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="/login">Login</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="/search">Search</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="/delete">Delete</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="/view">ViewAll</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigationbar