import { legacy_createStore as createStore } from "redux";
import contactReducer from "../reducers/contactReducer";
import authReducer from "../reducers/authReducer";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  contact: contactReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(reducers);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);

// export default store;
