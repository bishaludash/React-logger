import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";
import axios from "axios";

// get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get("/logs");
    const data = res.data;
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
