import axios from "axios";
import { ActionType } from "./ActionType";

const headers = {
  "Content-Type": "application/json",
};
// Action creators
export const createItemRequest = () => {
  return {
    type: ActionType.CreateRequest,
  };
};

export const createItemSuccess = (data) => {
  return {
    type: ActionType.SuccessfulCreateRequest,
    payload: data,
  };
};

export const createItemFailure = (error) => {
  return {
    type: ActionType.FailedCreateRequest,
    payload: error,
  };
};

// Async action creator
export const createItem = (newItem) => {
  return async (dispatch) => {
    dispatch(createItemRequest());
    await axios
      .post("https://noroffapi.pythonanywhere.com/todo/", newItem, { headers })
      .then((response) => {
        dispatch(createItemSuccess(response.data));
        // alert("success");
      })
      .catch((error) => {
        dispatch(createItemFailure(error.message));
      });
  };
};

// Async action creator
export const updateItem = (item) => {
  // alert(JSON.stringify(item));
  return async (dispatch) => {
    dispatch(createItemRequest());
    await axios
      .put("https://noroffapi.pythonanywhere.com/todo/" + item.id + "/", item, {
        headers,
      })
      .then((response) => {
        dispatch(createItemSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createItemFailure(error.message));
      });
  };
};
// Async action creator
export const deleteItem = (id) => {
  // alert(id);
  return async (dispatch) => {
    dispatch(createItemRequest());
    await axios
      .delete("https://noroffapi.pythonanywhere.com/todo/" + id + "/", {
        headers,
      })
      .then((response) => {
        alert("Deleted successfully.");
      })
      .catch((error) => {
        dispatch(createItemFailure(error.message));
        alert(error.message);
      });
  };
};
