import { combineReducers } from "redux";
import dataReadReducer from "./dataReadReducer";
import dataCreateReducer from "./dataCreateReducer";
// Import other reducers as needed

const rootReducer = combineReducers({
  retrievedData: dataReadReducer,
  createdData: dataCreateReducer,
  // Add other reducers here
});

export default rootReducer;
