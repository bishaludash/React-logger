import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from "./types";
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

// Add logs
export const addLogs = log => async dispatch => {
  try {
    setLoading();
    const res = await axios.post("/logs", log);
    const data = res.data;
    dispatch({
      type: ADD_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// DELETE LOG FROM SERVER
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    console.log(id);
    await axios.delete(`/logs/${id}`);
    // await fetch(`/logs/${id}`, {
    //   method: "DELETE"
    // });
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// update log to server
export const updateLog = log => async dispatch => {
  console.log(log);
  try {
    setLoading();
    const res = axios.put(`/logs/${log.id}`, { log });
    const data = res.data;

    dispatch({
      type: DELETE_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
