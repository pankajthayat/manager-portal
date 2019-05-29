import React from "react";

export default class AddUser extends React.Component {
  submitHandler = (event, action) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form && form.checkValidity() === false) {

      event.stopPropagation();
      event.target.className += " was-validated";
    } else if (event.type == "submit") {
      this.handleOnSubmit(event, "save")
    }
  }
  render() {
    return <div>Add user
           
    </div>;
  }
}
