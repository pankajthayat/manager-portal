import React from "react";
import { Field, reduxForm } from 'redux-form'


  // this fn is given all the form values and return an errors object
  const validate =values=>{
    //errors obj should be in same shape as values obj
    const errors = {};
    if(!values.firstName){
      errors.firstName = 'Required'
    }
    if(!values.lastName){
      errors.lastName = 'Required'
    }
    if(!values.email){
      errors.email = 'Required'
    }
    return errors;
  } 
class AddUser extends React.Component {



  handleOnSubmit = e =>{
    e.preventDefault();
    console.log("handle on submit : ", e)
  }
   renderInput =({input,meta, label})=>{
return(
  <>
  <div className="col-sm-3 col-form-label">
  <label>{label}: </label>
  </div>
  <div className="col-sm-9">
  <input {...input } className="form-control" placeHolder = {label} /> {/* all the meta info are injuected into component here*/ }
 {meta.error && meta.touched && <span>{meta.error}</span> }
 </div>
 </>
)
  }
  render() {
    console.log("props: ", this.props)
    return <div >
       <div className="form-component">
      <form className="form-horizontal" onSubmit = {this.handleOnSubmit}>
      <div className="container">
      <div className="row">
     <Field name = "firstName" label = "First Name" component = {this.renderInput}/> {/* all the meta info are injuected into component here*/ }
     </div>
     <div className="row">
     <Field name = "lastName" label = "Last Name" component = {this.renderInput}/> {/* all the meta info are injuected into component here*/ }
     </div>
     <div className="row">
     <Field name = "email" label = "email" component = {this.renderInput}/> {/* all the meta info are injuected into component here*/ }
     </div>
     <button type = "submit">Submit</button>
     </div>
     </form>
     </div>
    </div>;
  }

}

export default reduxForm({
  form: "user",
  destroyOnUnmount: false, //to not destroy from data on unmount
  validate: validate
})(AddUser)