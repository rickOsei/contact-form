import { legacy_createStore as createStore } from "redux";
import contactReducer from "../reducers/contactReducer";

const store = createStore(contactReducer);

export default store;
