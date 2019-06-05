import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM } from "../actions/itemTypes";

const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case CREATE_ITEM: 
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => (item._id !== action.payload))
      };
    default:
      return state;
  }
}