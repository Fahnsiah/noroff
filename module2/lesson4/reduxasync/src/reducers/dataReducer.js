import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
} from "../actions/Actions";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
