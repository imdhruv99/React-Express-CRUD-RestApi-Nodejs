import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-3 mb-2 mx-0">
		<NavLink to="/" className="navbar-brand">
			Dynamic API APP
		</NavLink>

		<div className="collapse navbar-collapse">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<NavLink
						to="/add"
						activeClassName="is-active"
						className="btn btn-success rounded"
						type="submit"
					>
						Add Post
					</NavLink>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
