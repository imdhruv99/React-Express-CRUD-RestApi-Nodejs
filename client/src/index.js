import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";

const reduxStore = configureStore();

ReactDOM.render(
	<Provider store={reduxStore}>
		<AppRouter />
	</Provider>,
	document.getElementById("root")
);
