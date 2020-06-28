import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import postReducer from "../reducers/postReducer";

export default () => {
	// Creating Store
	const store = createStore(
		combineReducers({
			postObject: postReducer
		}),
		applyMiddleware(thunk)
	);

	return store;
};
