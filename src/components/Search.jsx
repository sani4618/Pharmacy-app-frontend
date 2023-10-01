import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import axios from 'axios'

// http://127.0.0.1:8000/api/search/

const Search = () => {
    const [data, setdata] = useState([])
    const [isLoading, SetIsLoading] = useState(false)
    const [NewSearch, SetNewSearch] = useState(
        {
            medicinename: "",
        }
    )
    const ReadSearh = (event) => {
        SetNewSearch({ ...NewSearch, [event.target.name]: event.target.value })
    }
    const DisplaySearch = () => {
        // console.log(NewSearch)
        SetIsLoading(true)
        const appLink = "http://127.0.0.1:8000/api/search/"
        axios.post(appLink, NewSearch).then(
            (response) => {
                console.log(response.data)
                setdata(response.data)
                SetIsLoading(false)
            }
        )
    }
    return (
        <div>
            <Navigationbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">Medicine Name</label>
                                <input type="text" name="medicinename" value={NewSearch.medicinename} className="form-control" onChange={ReadSearh} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={DisplaySearch} className="btn btn-success">Search</button>
                            </div>
                            {isLoading ? <p>Loading....</p> :
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div class="card">
                                                <img src={value.image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.medicinename}</h5>
                                                    <p class="card-text">{value.mfglicno}</p>
                                                    <p class="card-text">{value.batchno}</p>
                                                    <p class="card-text">{value.MRPRs}</p>
                                                    <p class="card-text">{value.DOM}</p>
                                                    <p class="card-text">{value.DOE}</p>
                                                    <p class="card-text">{value.marketedby}</p>
                                                    <p class="card-text">{value.manufacturedBy}</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search