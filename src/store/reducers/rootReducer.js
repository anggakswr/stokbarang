import authReducer from "./authReducer";
import barangReducer from "./barangReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  authReducer,
  barangReducer,
  firestoreReducer,
  firebaseReducer,
});

export default rootReducer;
