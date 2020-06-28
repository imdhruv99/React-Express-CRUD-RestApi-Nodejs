import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { changeSelectedPost, deletePost } from "../actions/postActions";

class Post extends Component {
	state = {};

	componentDidMount() {
		const _id = this.props.match.params.id;
		this.props.changeSelectedPost(_id);
	}

	onClickRemoveHandler = (event) => {
		this.props.deletePost(this.props.post._id);
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/posts" />;
		}

		return (
			<div className="card my-4 mt-5">
				<h3 className="card-header">{this.props.post.title}</h3>
				<div className="card-body">
					<h6>ID {this.props.post._id}</h6>
					<p>{this.props.post.body}</p>

					<div className="btn-group" role="group" aria-label="Basic example">
						<button className="btn btn-danger" onClick={this.onClickRemoveHandler}>
							Delete
						</button>
						<Link className="btn btn-success" to={`/edit/${this.props.post._id}`}>
							Edit
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.postObject.post,
		posts: state.postObject.posts
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeSelectedPost: (_id) => dispatch(changeSelectedPost(_id)),
		deletePost: (_id) => dispatch(deletePost(_id))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Post);
