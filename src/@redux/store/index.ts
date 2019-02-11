import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const configuredStore = () => {
  const enhancers: any[] = [];

  const store = createStore(rootReducer, composeWithDevTools(...enhancers));

  return store;
};

export default configuredStore;
