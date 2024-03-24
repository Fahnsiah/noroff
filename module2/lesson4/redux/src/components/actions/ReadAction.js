import axios from "axios";
import { ActionType } from "./ActionType";

const headers = {
  "Content-Type": "application/json",
};
// Action creators
export const readDataRequest = () => {
  return {
    type: ActionType.ReadRequest,
  };
};

export const readDataSuccess = (data) => {
  return {
    type: ActionType.SuccessfulReadRequest,
    payload: data,
  };
};

export const readDataFailure = (error) => {
  return {
    type: ActionType.FailedReadRequest,
    payload: error,
  };
};

// Async action creator
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(readDataRequest());
    await axios
      .get("https://noroffapi.pythonanywhere.com/todo/", { headers })
      .then((response) => {
        dispatch(readDataSuccess(response.data));
        // alert("success");
      })
      .catch((error) => {
        dispatch(readDataFailure(error.message));
      });
  };
};
