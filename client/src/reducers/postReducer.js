const initialState = {
	post: {},
	posts: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case "ADD_POSTS":
			return {
				post: state.post,
				posts: action.postArray
			};
		case "ADD_POST":
			return {
				post: { ...state.post, ...action.post },
				posts: [...state.posts, action.post]
			};
		case "CHANGE_SELECTED_POST":
			return {
				post: action.post,
				posts: state.posts
			};
		case "UPDATE_POST":
			return {
				post: { ...state.post, ...action.post },
				posts: state.posts.map((post) => {
					if (post._id === action._id) return { ...post, ...action.post };
					else return post;
				})
			};
		case "DELETE_POST":
			return {
				post: {},
				posts: state.posts.filter((post) => post._id !== action._id)
			};
		default:
			return state;
	}
}
