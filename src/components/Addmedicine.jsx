import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import axios from 'axios'

const Addmedicine = () => {
    const [NewMedicine,SetNewMedicine]=useState(
        {
            medicinename:"",
            mfglicno:"",
            batchno:"",
            DOM:"",
            DOE:"",
            MRPRs:"",
            marketedby:"",
            manufacturedBy:"",
            image:""
        }
    )
    const ReadMedicine=(event)=>{
        SetNewMedicine({...NewMedicine,[event.target.name]:event.target.value})

    }
    const DisplayMedicine=()=>{
        console.log(NewMedicine)
        const appLink="http://127.0.0.1:8000/api/addmed/"
        axios.post(appLink,NewMedicine).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="Successfully Added")
                {
                    alert("Successfully added")
                   SetNewMedicine({
                        medicinename:"",
                        mfglicno:"",
                        batchno:"",
                        DOM:"",
                        DOE:"",
                        MRPRs:"",
                        marketedby:"",
                        manufacturedBy:"",
                        image:""
                    })
                }
            }
        )
    }
  return (
    <div>
        
<div className="container">
    
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form label">Medicine Name</label>
                <input type="text" name="medicinename" value={NewMedicine.medicinename} className="form-control" onChange={ReadMedicine}/>
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Mfg.Lic.No</label>
                <input type="text" name="mfglicno" value={NewMedicine.mfglicno} className="form-control" onChange={ReadMedicine}/>
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Batch No</label>
                <input type="text" name="batchno" value={NewMedicine.batchno} className="form-control" onChange={ReadMedicine} />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Date of Manufature</label>
                <input type="date" name="DOM" value={NewMedicine.DOM} id="" className="form-control" onChange={ReadMedicine}/>
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Date of Expiry</label>
            <input type="date" name="DOE" value={NewMedicine.DOE} id="" className="form-control" onChange={ReadMedicine} />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">M.R.P.Rs</label>
                <input type="text" name="MRPRs" value={NewMedicine.MRPRs} className="form-control" onChange={ReadMedicine} />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Marketed By</label>
                <input type="text" name="marketedby" value={NewMedicine.marketedby} className="form-control" onChange={ReadMedicine} />
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Manufactured By</label>
                <input type="text" name="manufacturedBy" value={NewMedicine.manufacturedBy} className="form-control" onChange={ReadMedicine} />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form label">Image</label>
                <input type="text" name="image" value={NewMedicine.image} className="form-control" onChange={ReadMedicine} />
                </div>
           
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={DisplayMedicine} className="btn btn-danger">Add Medicine</button>
            </div>
        </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Addmedicine