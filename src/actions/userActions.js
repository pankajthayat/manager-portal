import axios from "axios";

const API_URL = "http://localhost:3030/user";


export const addUser = (user) => async dispatch => {
      try {
        dispatch({ type: "ADD_USER_PENDING"});
        const response = await axios.post(`${API_URL}/add`, user);
        console.log("res : ", response.data);
        dispatch({
          type: "ADD_USER",
          payload: response.data
        });
      } catch (e) {
        console.log("error: ", e);
        dispatch({ type: "ADD_USER_FAILED"});
      }
    };
    
    