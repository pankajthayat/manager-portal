import React from "react";
import { Field, reduxForm } from 'redux-form'

class AddUser extends React.Component {
 
  
  
  render() {
    console.log("props: ", this.props)
    return <div>
      <form>
     <label>First Name: </label>
     <Field name = "firstName" component = "input"/>
     <label>Last Name: </label>
     <Field name = "lastName" component = "input"/>
     <label>Email: </label>
     <Field name = "email" component = "input"/>
     <button type = "submit">Submit</button>
     </form>
    </div>;
  }
}


export default reduxForm({
  form: "user"
})(AddUser)