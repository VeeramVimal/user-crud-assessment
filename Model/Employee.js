// const mongoose = require ('mongoose')

//     const EmployeeSchema= new mongoose.Schema({


    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    
    // List of columns for Employee schema
    let Employee = new Schema({

Username: {
  type: String,
  // required: true
 },

 Designation: {
    type: String,
    // required: true
   },

 Name: {
  type: String,
  // required: true
 },

 MobileNumber: {
    type: String,
    // required: true
   },

   Email: {
    type: String,
    // required: true
   },

   Password: {
    type: String,
    // required: true
   },

   Gender: {
    type: String,
    // required: true
   },

   DOB: {
  type: Date,
  // required: true,
  default: new Date()
 },
 Newsletter: {
  type: String,
 },

 About: {
  type: String,
 }

// });
// module.exports = EmployeeDetails = mongoose.model('EmployeeDetails', EmployeeSchema, EmployeeDetails);
},{
    collection: 'employees'
    });
    
    module.exports = mongoose.model('Employee', Employee);

