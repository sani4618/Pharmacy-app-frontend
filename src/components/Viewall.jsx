import React, { useEffect, useState } from 'react'
import Navigationbar from './Navigationbar'
import axios from 'axios'

const appLink = " http://127.0.0.1:8000/api/view/"
const Viewall = () => {
    const [viewMedicine, SetViewMedicine] = useState([])
    const [isLoading, SetIsLoading] = useState(true)

    useEffect(
        () => {
            FetchMedicineDetails()
        }
    )



    const FetchMedicineDetails = () => {
        axios.get(appLink).then(
            (response) => {
                SetViewMedicine(response.data)
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

                            {isLoading ? <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span role="status">Loading...</span>
                            </button> : viewMedicine.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">


                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Medicine Name={value.medicinename}</h5>
                                                <p class="card-text">Mfg.Lic.No={value.mfglicno}</p>
                                                <p class="card-text">Batch No={value.batchno}</p>
                                                <p class="card-text">Date of Manufactured={value.DOM}</p>
                                                <p class="card-text">Date of Expiry={value.DOE}</p>
                                                <p class="card-text">MRP.Rs={value.MRPRs}</p>
                                                <p class="card-text">Marketed By={value.marketedby}</p>
                                                <p class="card-text">Manufactured By={value.manufacturedBy}</p>
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

export default Viewall