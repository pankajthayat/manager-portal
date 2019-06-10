import React from "react";
import { Field, reduxForm } from 'redux-form'

class AddUser extends React.Component {
  handleOnSubmit = e =>{
    e.preventDefault();
    console.log("handle on submit : ", e)
  }
  render() {
    console.log("props: ", this.props)
    return <div>
      <form onSubmit = {this.handleOnSubmit}>
        <div>
     <label>First Name: </label>
     <Field name = "firstName" component = "input"/>
     </div>
     <div>
     <label>Last Name: </label>
     <Field name = "lastName" component = "input"/>
     </div>
     <div>
     <label>Email: </label>
     <Field name = "email" component = "input"/>
     </div>
     <div>
     <button type = "submit">Submit</button>
     </div>
     </form>
    </div>;
  }
}


export default reduxForm({
  form: "user"
})(AddUser)