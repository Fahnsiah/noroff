// actions.ts
import { Dispatch } from "redux";
import axios from "axios";
import { RootState } from "../store/store";
import { ThunkAction } from "redux-thunk";

// Action types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Action interfaces
interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any; // Replace 'any' with the type of your data
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  error: string;
}

export type DataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

export const fetchData = (): ThunkAction<
  void,
  RootState,
  unknown,
  DataActionTypes
> => {
  return async (
    dispatch: Dispatch<DataActionTypes>,
    getState: () => RootState
  ) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await axios.get("https://api.example.com/data");
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
    }
  };
};

// Action creators
// export const fetchData = () => {
//   return async (
//     dispatch: Dispatch<DataActionTypes>,
//     getState: () => RootState
//   ) => {
//     dispatch({ type: FETCH_DATA_REQUEST });

//     try {
//       const response = await axios.get("https://api.example.com/data");
//       dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
//     } catch (error: any) {
//       dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
//     }
//   };
// };

// export const fetchData = (): ThunkAction<
//   void,
//   RootState,
//   unknown,
//   DataActionTypes
// > => {
//   return async (
//     dispatch: Dispatch<DataActionTypes>,
//     getState: () => RootState
//   ) => {
//     dispatch({ type: FETCH_DATA_REQUEST });

//     try {
//       const response = await axios.get("https://api.example.com/data");
//       dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
//     } catch (error: any) {
//       dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
//     }
//   };
// };

// // actions.ts
// import { Action } from "redux";

// // Define action types
// export const ADD_TODO = "ADD_TODO";
// export const DELETE_TODO = "DELETE_TODO";

// // Define action interfaces
// export interface AddTodoAction extends Action<typeof ADD_TODO> {
//   payload: string;
// }

// export interface DeleteTodoAction extends Action<typeof DELETE_TODO> {
//   payload: number;
// }

// // Define action creators
// export const addTodo = (text: string): AddTodoAction => ({
//   type: ADD_TODO,
//   payload: text,
// });

// export const deleteTodo = (id: number): DeleteTodoAction => ({
//   type: DELETE_TODO,
//   payload: id,
// });

// // Export all action types
// export type TodoAction = AddTodoAction | DeleteTodoAction;
