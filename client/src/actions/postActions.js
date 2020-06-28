import apiServer from "../config/apiServer";

export const addPosts = () => {
	return (dispatch) => {
		apiServer
			.get("/posts")
			.then((response) => {
				if (response.data.success) {
					dispatch({
						type: "ADD_POSTS",
						postArray: response.data.postArray
					});
				} else {
					console.log(response.data.message);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};
};

// Promise is being used to get the response data
export const addPost = (postData) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			apiServer
				.post("/post", postData)
				.then((response) => {
					if (response.data.success) {
						dispatch({
							type: "ADD_POST",
							post: { ...postData, _id: response.data._id }
						});
					} else {
						console.log(response.data.message);
					}
					resolve(response.data);
				})
				.catch((e) => {
					console.log(e);
					reject(e);
				});
		});
	};
};

export const changeSelectedPost = (_id) => {
	return (dispatch) => {
		apiServer
			.get(`/post/${_id}`)
			.then((response) => {
				if (response.data.success) {
					dispatch({
						type: "CHANGE_SELECTED_POST",
						post: response.data.singlePost
					});
				} else {
					console.log(response.data.message);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};
};

export const updatePost = (updatedData) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			apiServer
				.put(`/post/${updatedData.post._id}`, updatedData)
				.then((response) => {
					if (response.data.success) {
						dispatch({ type: "UPDATE_POST", post: updatedData });
					} else {
						console.log(response.data.message);
					}
					resolve(response.data);
				})
				.catch((e) => {
					console.log(e);
					reject(e);
				});
		});
	};
};

export const deletePost = (_id) => {
	return (dispatch) => {
		apiServer
			.delete(`/post/${_id}`)
			.then((response) => {
				if (response.data.success) {
					dispatch({
						type: "DELETE_POST",
						_id
					});
				} else {
					console.log(response.data.message);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};
};
