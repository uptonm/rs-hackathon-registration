import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchUsers = async () => {
  const res = await axios.get(
    `/api/users/?key=${process.env.REACT_APP_QUERYKEY}`
  );
  return res.data;
};

export const putUser = async (id, data) => {
  const res = await axios.put(
    `/api/users/${id}/?key=${process.env.REACT_APP_QUERYKEY}`,
    data
  );
  return res.data;
  //console.log({ type: PUT_USER, payload: res.data });
};
