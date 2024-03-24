// reducers.js
import { ActionType } from "../actions/ActionType";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ReadRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.SuccessfulReadRequest:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ActionType.FailedReadRequest:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReadReducer;
