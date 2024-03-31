import { combineReducers } from "redux";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DataActionTypes,
} from "../actions/actions";

// Define the interface for DataState
export interface DataState {
  data: any; // Replace 'any' with the type of your data
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialDataState: DataState = {
  data: null,
  loading: false,
  error: null,
};

// Define the data reducer
const dataReducer = (
  state = initialDataState,
  action: DataActionTypes
): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;

// // reducers.ts
// import { combineReducers } from "redux";
// import { TodoAction, ADD_TODO, DELETE_TODO } from "../actions/actions";

// // Define the interface for Todo
// export interface Todo {
//   id: number;
//   text: string;
// }

// // Define the interface for TodoState
// export interface TodoState {
//   todos: Todo[];
// }

// // Define the initial state
// const initialState: TodoState = {
//   todos: [],
// };

// // Define the reducer function
// const todoReducer = (state = initialState, action: TodoAction): TodoState => {
//   switch (action.type) {
//     case ADD_TODO:
//       const newTodo: Todo = {
//         id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
//         text: action.payload,
//       };
//       return {
//         ...state,
//         todos: [...state.todos, newTodo],
//       };
//     case DELETE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export type RootState = ReturnType<typeof rootReducer>;

// // Combine reducers
// const rootReducer = combineReducers({
//   todos: todoReducer,
// });

// export default rootReducer;
