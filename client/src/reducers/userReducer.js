import { GET_USER, CREATE_USER, LOGIN_USER } from "../actions/userTypes";

const initialState = {
  users: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
      };
    case CREATE_USER: 
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case LOGIN_USER:
      return {
        ...state,
        
      };
    default:
      return state;
  }
}