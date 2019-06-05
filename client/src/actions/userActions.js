import axios from "axios";
import { GET_USER, CREATE_USER, LOGIN_USER } from "./userTypes";

export const getUser = (_id) => dispatch => {
  axios.get(`/user/${_id}`).then((res) => {
    dispatch({
      type: GET_USER,
      payload: res.data
    })
  })
}

export const createUser= (user) => dispatch => {
  axios.post("/user/register", user).then((res) => {
    dispatch({
      type: CREATE_USER,
      payload: res.data
    })
  })
}

export const loginUser = (user) => dispatch => {
  axios.post("/user/login", user).then((res) => {
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    })
  })
}