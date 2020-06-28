import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";
import Post from "../components/Post";
import PostList from "../components/PostList";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";

class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="pt-5 p-4">
					<Header />
					<Switch>
						<Route path="/" component={PostList} exact={true} />
						<Route path="/add" component={AddPost} />
						<Route path="/posts" component={PostList} exact={true} />
						<Route path="/posts/:id" component={Post} />
						<Route path="/edit/:id" component={EditPost} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default AppRouter;
