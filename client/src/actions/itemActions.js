import axios from "axios";
import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM } from "./itemTypes";

export const getItems = () => dispatch => {
  axios.get("/items/").then((res) => {
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  })
}

export const createItem = (item) => dispatch => {
  axios.post("/items/create", item).then((res) => {
    dispatch({
      type: CREATE_ITEM,
      payload: res.data
    })
  })
}

export const deleteItem = (item) => dispatch => {
  axios.delete("/items/:id", item).then((res) => {
    dispatch({
      type: DELETE_ITEM,
      payload: item
    })
  })
}