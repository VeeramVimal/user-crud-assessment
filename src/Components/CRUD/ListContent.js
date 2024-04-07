import React, { useState ,useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import {Data } from "../../data";
import FontAwesome from "react-fontawesome";
import faStyle from "font-awesome/css/font-awesome.css";


function ListContent(props) {
    console.log("props", props);
    const History=useHistory()
    const [listData, setListData]=useState([]);
    // const [deletData, setDeleteData] = useState(Data);

    useEffect(()=>{
        if(!props.location.state.list){
            setListData(Data);
            console.log("con if");
        }else{
            console.log("con else");
            setListData([...Data, props.location.state.list]); 
        }
    }, []);

    const handleEditData=(val)=>{
       History.push("/edit", {editData:val})
    }   

    const deleteEmployee =(id)=>{
        const del = Data.filter((item) => (item.id));
        setListData(del);
    }

    return(
        <section>
            <div className="container">
                <Link to="/add">
                <Button className="btn btn-primary">Add Record</Button>
                </Link>
            </div>

            <div className="container">
            <div className="table_show">
                <Table hover  striped responsive size="sm">
                    <thead className="bg">
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
                                        <FontAwesome className="fas fa-trash img_icon" onClick={deleteEmployee}></FontAwesome>
                                        {/* <FontAwesome className="fas fa-edit img_icon" ></FontAwesome> */}
                                    </td>
                                  
                                </tr>
                            )
                        })
                        }               
                    </tbody>
                </Table>
            </div>
        </div>
        </section>

    )
}
export default ListContent;