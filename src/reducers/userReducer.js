
const INITIAL_STATE = {
x:{firstName: "pankaj", lastName:"afhasfdas", employeeId:123}
}


export default (state=INITIAL_STATE, action)=>{
    switch (action.type){
        case "ADD_USER_PENDING":
            return { ...state, addPending: true, addFailed: false}
        case "ADD_USER":
            return{ ...state, user: action.payload, addPending: false}
        case "ADD_USER_FAILED":
                    return{ ...state, addFailed: true, addPending: false}
        default:
            return state;
    }
}


