import React, { useEffect, useState } from "react";
import '../Style/Styles.css';
import { Link, useHistory } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import {Data } from "../../data";
import FontAwesome from "react-fontawesome";
import faStyle from "font-awesome/css/font-awesome.css";
import PopUp from "./PopUP";
import { initialize } from "workbox-google-analytics";

function MainContent() {
    const [listData, setListData]=useState(Data);
    const [id, setId] = useState(3);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState({value: false, id: ''});
    const [Detail , setDetail]= useState({
        FirstName:"",
        LastName:"",
        email:"",
        MobileNumber:"",
        dob:"",
        Status:"",
        Address:""
    });


    // const addData = () => {
    //     if(isEditClicked.value){
    //       const res = {
    //         id: isEditClicked.id,
    //         Name: state.Name,
    //         Age: state.Age,
    //         Mobile: state.Mobile,
    //         Place: state.Place,
    //       };
    //       const  resSet = initialData.map(u => u.id !== isEditClicked.id ? u : res);
    //       setInitialData(resSet)
    //     } else {
    //       const res = {
    //         id: id,
    //         Name: state.Name,
    //         Age: state.Age,
    //         Mobile: state.Mobile,
    //         Place: state.Place,
    //       };
    //       bioData.push(res);
    //       setId(prev => prev +1)
    
    //     }
    //     setIsOpen(!isOpen);
    //   };

    const handleSubmit=(event) =>{
        event.preventDefault();
        if(isEditClicked.value){
            const res ={
                id: isEditClicked.id,
                FirstName: Detail.FirstName,
                LastName: Detail.LastName,
                email: Detail.email,
                MobileNumber: Detail.MobileNumber,
                dob: Detail.dob,
                Status: Detail.Status,
                Address: Detail.Address
            };
            const getRes = listData.map(index => index.id !== isEditClicked.id ? index : res);
            setListData(getRes);
        }else{
            const res ={
                id: id,
                FirstName: Detail.FirstName,
                LastName: Detail.LastName,
                email: Detail.email,
                MobileNumber: Detail.MobileNumber,
                dob: Detail.dob,
                Status: Detail.Status,
                Address: Detail.Address
            }
    
            setListData([...listData, res]);
            setId((prev) => prev + 1);
            Data.push(res);

        }
        
    setIsOpen(!isOpen);
    // setId((prev) => prev + 1);
    // History.push('/',{list:res})
    };

    const handleChange = (event)=>{
        setDetail((prevProps) =>({
            ...prevProps, [event.target.name] :event.target.value
          }))
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
      const closePopup = () => {
        setIsOpen(false);
      };
    
      const handleEditData=(val)=>{
        setDetail(val)
        setIsOpen(!isOpen);
        setIsEditClicked({value: true, id: val.id});
     }   
 
     const deleteEmployee =(itemId)=>{
        //  const del = listData.filter((item) => item.id !== itemId);
        setListData(prevProps => prevProps.filter(({id}) => id !== itemId));
     }
    return(
          
        <section> 
        <div className="container">
         {/* Button trigger modal  */}
       <button type="button" class="btn btn-primary" style={{backgroundColor:"blueviolet" , border: 0}} data-bs-toggle="modal"  onClick={() => togglePopup()}>
       Add Record
       </button>
       </div>
       <div className="container">
       <div className="table_show mt-1">
           <Table  responsive size="xlg">
               <thead className="back_table" style={{backgroundColor : 'rgb(241, 241, 241)'}}>
                   <tr>
                       <th>S.no</th>
                       <th>FIRSTNAME</th>
                       <th>LASTNAME</th>
                       <th>EMAIL</th>
                       <th>MOBILENUMBER</th>
                       <th>DOB</th>
                       <th>STATUS</th>
                       <th>ADDRESS</th>
                       <th>ACTION</th>
                      
                   </tr>
               </thead>
               <tbody>
               { 
                  listData && listData.length>0 && listData.map((item, i) =>{
                       return(
                           <tr key={i}>  
                               <td>{i+1}</td>
                               <td>{item.FirstName}</td>
                               <td>{item.LastName}</td>
                               <td>{item.email}</td>
                               <td>{item.MobileNumber}</td>
                               <td>{item.dob}</td>
                               <td>{item.Status}</td>                                   
                               <td>{item.Address}</td>
                               <td>
                                   <FontAwesome className="fas fa-edit img_icon" onClick={()=>handleEditData(item)}></FontAwesome>
                                   <FontAwesome className="fas fa-trash img_icon" onClick={() => deleteEmployee(item.id)}></FontAwesome>
                               </td>
                             
                           </tr>
                       )
                   })
                   }               
               </tbody>
           </Table>
       </div>
        </div>
  
        <div >
       {isOpen && (<PopUp
           
       content={(
           <div className="container ">
           <div className="col-sm-12 "> 
           <h3>Client Profile</h3>
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
                   <select className='form-control' type = 'select' name='Status'  onChange ={handleChange} value={Detail.Status}>
                       <option value=""> -- None -- </option>
                       <option value="ACTIVE">ACTIVE</option>
                       <option value="IN-ACTIVE">IN-ACTIVE</option>
                   </select>
               </div>
               
               <div className="form-group">
                     <label>Address</label>
                     <textarea className="form-control" id="text" name="Address" value ={Detail.Address} onChange ={handleChange}required></textarea>
                   </div>&nbsp;
                   <div className="form-group">
                     <button type="submit" className="btn btn-primary ">
                       Submit
                     </button> &nbsp;
                     <button type="submit" className="btn btn-danger"  onClick={() => closePopup()}>Cancel</button>
                     </div>
           </form>   
       </div>
   </div>
       )} 
        handleClose={togglePopup}
   
        />)}  
        
   </div>

   </section>
        
    )
}
export default MainContent;
