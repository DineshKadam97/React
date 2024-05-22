import { createStore } from "redux";
import rootReducer from "./reducers"; // Assuming you have your root reducer defined

// Create the Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
