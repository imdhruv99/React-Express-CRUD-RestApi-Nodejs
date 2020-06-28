const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	userId: {
		type: String,
		// required: true
	},
	title: {
		type: String,
		require: true
	},
	body: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Post", PostSchema, "Post");
