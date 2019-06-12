import React from "react";
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import * as userAction from "../../actions/userActions";


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
    console.log("handle on submit : ")
    this.props.addUser(this.props.user)
  }
   renderInput =({input,meta, label, col})=>{
return(
  <>
  <div className={`col-sm-${col}`}>
  <input {...input } className="form-control" placeholder = {label} /> {/* all the meta info are injuected into component here*/ }
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
      <div className="form-group">
      <div className="row">
      <div className="col-sm-2 col-form-label">
          <label>First Name: </label>
          </div>
     <Field name = "firstName" label = "First Name" col = "6"  component = {this.renderInput}/> {/* all the meta info are injuected into component here*/ }
    </div>
     </div>
     <div className="form-group">
     <div className="row">
     <div className="col-sm-2 col-form-label">
          <label>Last Name: </label>
          </div>
     <Field name = "lastName" label = "Last Name" col = "6"  component = {this.renderInput}/> {/* all the meta info are injuected into component here*/ }
     </div>
     </div>
     <div className="form-group">
     <div className="row">
     <div className="col-sm-2 col-form-label">
          <label>Employee Id: </label>
          </div>
     <Field name = "employeeId" label = "employeeId"  col = "3" component = {this.renderInput}/> {/* all the meta info are injuected into component here*/ }
     </div>
     </div>
     <div className="form-group2">
                  <div className="row">
     <div className="col-sm-5" />
                    <div className="col-sm-4">
     <span className="button-space">
          <input
            type="submit"
            id="formSubmit"
            value="Add"
            className="btn btn-outline-dark custom"
          />
         
        </span>
        <span className="button-space">
                        <button
                          type="button"
                          className="btn btn-outline-dark custom"
                  
                        >
                          Reset
                        </button>
                      </span>
        </div>
        </div>
     </div>
     </div>
     </form>
     </div>
    </div>;
  }

}

const mapStatetoProps = (state) =>{
  console.log("hjdsh:", state.user.x)
  console.log("state: ", state, state.form.user)
  return{
    user: state.form.user.values,
    initialValues : state.user.x
  }
}
const mapDisptachToProps = (dispatch) =>{
  return{
    addUser: (user) => dispatch(userAction.addUser(user))
  }
}

export default reduxForm({
  form: "user",
  enableReinitialize: false,
  destroyOnUnmount: false, //to not destroy from data on unmount
  validate: validate
})(connect(mapStatetoProps, mapDisptachToProps)(AddUser));