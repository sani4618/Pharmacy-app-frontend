import React from 'react'
import Navigationbar from './Navigationbar'

const Addmedicine = () => {
  return (
    <div>
        <Navigationbar/>

<div className="container">
    
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form label">Medicine Name</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Mfg.Lic.No</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Batch No</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Date of Manufature</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Date of Expiry</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">M.R.P.Rs</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Marketed By</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Manufactured By</div>
           
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-danger">Add Medicine</button>
            </div>
        </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Addmedicine