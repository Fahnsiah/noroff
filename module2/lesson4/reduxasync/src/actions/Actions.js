import axios from "axios";

export const FETCH_USER_DATA_REQUEST = "FETCH_USER_DATA_REQUEST";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FETCH_USER_DATA_FAILURE = "FETCH_USER_DATA_FAILURE";

export const fetchToDoData = () => {
  return (dispatch) => {
    dispatch(fetchUserDataRequest());
    axios
      .get("https://noroffapi.pythonanywhere.com/todo/")
      .then((response) => {
        const data = response.data;
        dispatch(fetchUserDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUserDataFailure(error.message));
      });
  };
};

export const fetchUserDataRequest = () => {
  return {
    type: FETCH_USER_DATA_REQUEST,
  };
};

export const fetchUserDataSuccess = (data) => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchUserDataFailure = (error) => {
  return {
    type: FETCH_USER_DATA_FAILURE,
    payload: error,
  };
};
