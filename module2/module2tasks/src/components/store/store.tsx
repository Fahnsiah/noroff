// store.ts
import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import axios from "axios";
import rootReducer from "../reducers/reducers";
import { DataActionTypes } from "../actions/actions"; // Assuming you have defined your actions

export type RootState = ReturnType<typeof rootReducer>;

// Define thunk middleware type
type AppThunk<ReturnType = void> = ThunkMiddleware<
  RootState,
  DataActionTypes,
  ReturnType
>;

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk as AppThunk));

export default store;

// // store.ts
// import { createStore, applyMiddleware } from "redux";
// import { ThunkMiddleware, thunk } from "redux-thunk";
// import rootReducer from "../reducers/reducers";

// export type RootState = ReturnType<typeof rootReducer>;

// // Create the Redux store
// const store = createStore(rootReducer, applyMiddleware(thunk as AppThunk));

// // const store = createStore(rootReducer, applyMiddleware(thunk as AppThunk);

// export default store;
