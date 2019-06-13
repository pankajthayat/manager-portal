
const INITIAL_STATE = {
x:{firstName: "pankaj", lastName:"afhasfdas", employeeId:123},
users:[],
formData: {}
}


export default (state=INITIAL_STATE, action)=>{
    switch (action.type){
        case "ADD_USER_PENDING":
            return { ...state, addPending: true, addFailed: false}
        case "ADD_USER":
            return{ ...state, users: state.users.concat(action.payload), addPending: false}
        case "ADD_USER_FAILED":
                    return{ ...state, addFailed: true, addPending: false}
        case "GET_USERS":
           return { ...state, users: action.payload}
        case "DELETE_USER":
            return { ...state, users: state.users.filter((user)=>user.id !== action.payload)}
        case "UPDATE_USER":
            const updatedUser = action.payload;
            return { ...state, users: state.users.map((user) => user.id === updatedUser.id ? updatedUser : user)}
        case "EDIT_USER":
            return { ...state, formData: action.payload };
      default:
            return state;
    }
}


