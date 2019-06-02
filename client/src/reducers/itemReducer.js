import { ADD_ITEM, DELETE_ITEM } from "../actions/itemTypes";

export default function(state, action) {
  switch(action.type) {
    case ADD_ITEM: 
      return "";
    case DELETE_ITEM:
      return "";
    default:
      return state;
  }
}