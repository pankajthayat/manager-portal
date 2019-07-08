
// this fn is given all the form values and return an errors object
export const userValidator = values => {
    //errors obj should be in same shape as values obj
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.employeeId) {
      errors.employeeId = "Required";
    }
    return errors;
  };
