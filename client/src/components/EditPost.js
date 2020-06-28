import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { updatePost, changeSelectedPost } from "../actions/postActions";

class EditPost extends Component {
	state = {
		title: "",
		body: "",
		_id: ""
	};

	componentDidMount() {
		const _id = this.props.match.params.id;
		this.props.changeSelectedPost(_id);
	}

	static getDerivedStateFromProps(props, state) {
		if (props.post._id !== state._id) {
			return props.post;
		} else {
			return null;
		}
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		const updatedData = { post: { ...this.state } };
		this.props.updatePost(updatedData).then((response) => {
			console.log(response.message);
			this.setState({ redirect: true });
		});
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={`/posts/${this.state._id}`} />;
		}

		return (
			<div className="card my-4 mt-5">
				<h3 className="card-header">Edit Post</h3>
				<div className="card-body">
					<form onSubmit={this.onFormSubmit}>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								className="form-control"
								placeholder="Enter Title"
								value={this.state.title}
								onChange={(e) => this.setState({ title: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="body">Body</label>
							<textarea
								rows="5"
								type="text"
								id="body"
								className="form-control"
								placeholder="Enter Body"
								value={this.state.body}
								onChange={(e) => this.setState({ body: e.target.value })}
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
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
		updatePost: (updatedData) => dispatch(updatePost(updatedData))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditPost);
