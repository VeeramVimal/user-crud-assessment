import React, { useEffect, useState } from "react";
import '../Style/Styles.css';
import { Link, useHistory } from 'react-router-dom';

function AddContacts(props){
    const [Detail , setDetail]= useState({
        FirstName:"",
        LastName:"",
        email:"",
        MobileNumber:"",
        dob:"",
        // Gender:"",
        Status:"",
        Address:""
    });
    const History = useHistory();

   
    const handleSubmit=(event) =>{
        event.preventDefault();
        const res ={
            FirstName: Detail.FirstName,
            LastName: Detail.LastName,
            email: Detail.email,
            MobileNumber: Detail.MobileNumber,
            dob: Detail.dob,
            Status: Detail.Status,
            Address: Detail.Address
        }

    // setListData([...listData, res]);
    History.push('/',{list:res})
    };

    const handleChange = (event)=>{
        setDetail((prevProps) =>({
            ...prevProps, [event.target.name] :event.target.value
          }))
    };

    return(
        
        <section> 
             
        <div className="container">
            <div className="col-sm-12 ">   
          <h3>Add Client Profile</h3>
            </div>  
            <div className="col-sm-12 center ">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>FirstName</label>
                        <input
                        className="form-control"
                        type="text"
                        name = "FirstName"
                        placeholder ="enter ur Name"
                        value = {Detail.FirstName}
                        onChange ={handleChange}
                        required 
                        />
                    </div>
                    <div className="form-group">
                        <label>LastName</label>
                        <input
                        className="form-control"
                        type="text"
                        name = "LastName"
                        placeholder ="enter ur Name"
                        value = {Detail.LastName}
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input
                        className="form-control"
                        type="email"
                        name = "email"
                        placeholder ="enter ur emailId"
                        value = {Detail.email}
                        onChange ={handleChange}
                        required

                        />
                    </div>
                    <div className="form-group">
                        <label>MobileNumber</label>
                        <input
                        className="form-control"
                        type="text"
                        name = "MobileNumber"
                        placeholder ="enter ur MobileNumber"
                        value = {Detail.MobileNumber}
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>DOB</label>
                        <input
                        className="form-control"
                        type="date"
                        name = "dob"
                        placeholder ="enter ur DOB"
                        value = {Detail.dob}
                        onChange ={handleChange}
                        required
                        />
                    </div>
                   
                    <div className="form-group">
                    <label>Status</label>
                        <select className='form-control' type = 'select' name='Status'  onChange ={handleChange}>
                            <option value=""> -- None -- </option>
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="IN-ACTIVE">IN-ACTIVE</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                          <label>Address</label>
                          <textarea className="form-control" id="text" name="Address" value ={Detail.Address} onChange ={handleChange}required></textarea>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="button_1">
                            Submit
                          </button>
                          </div>
                </form>   
            </div>
        </div>
        </section>
    )   
}
export default AddContacts;