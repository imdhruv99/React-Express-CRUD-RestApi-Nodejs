import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
	<div className="jumbotron">
		<h1>
			404(NotFoundPage) - <Link to="/">Go home</Link>
		</h1>
	</div>
);

export default NotFoundPage;
