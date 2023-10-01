import React, { useState } from 'react'
import Navigationbar from './Navigationbar'

const Delete = () => {
    const [NewDelete,SetNewDelete]=useState(
        {
            medicinename:"",
        }
    )
    const ReadDelete=(event)=>{
        SetNewDelete({...NewDelete,[event.target.name]:event.target.value})
    }
    const DisplayDelete=()=>{
        console.log(NewDelete)
    }
  return (
    <div>
        <Navigationbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form label">Medicine Name</label>
                    <input type="text" name="medicinename" value={NewDelete.medicinename} className="form-control" onChange={ReadDelete}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={DisplayDelete} className="btn btn-success">Delete</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete