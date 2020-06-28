// Module's Intialisation
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");

// Express Initialisation
const app = express();

app.use(cors());

// Body Parser Middleware
app.use(
	express.urlencoded({
		extended: false
	})
);
app.use(express.json());

// Mongoose Middleware
mongoose.connect(
	"mongodb+srv://sagarsehwag:mongoatlas@cluster0-31tkz.mongodb.net/test?retryWrites=true",
	{
		useNewUrlParser: true
	}
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("MongoDB Connected..."));

// Importing Models
const Post = require("./models/Post");
app.use(compression());
app.use(express.static("client/build"));

// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.get("/posts", (req, res) => {
	Post.find({})
		.then((postArray) => {
			res.status(200).json({
				success: true,
				message: "All the post in the database is sent in the postArray variable in body",
				postArray
			});
		})
		.catch((e) => {
			console.log(e);
			res.status(500).json({
				success: false,
				message: "Error While Fetching Data from Database - " + e
			});
		});
});

app.get("/post/:id", (req, res) => {
	const { id } = req.params;

	Post.findById(id)
		.then((singlePost) => {
			res.status(200).json({
				success: true,
				message: "The post is exposed via singlePost variable in body",
				singlePost
			});
		})
		.catch((e) => {
			console.log(e);
			res.status(500).json({
				success: false,
				message: "Error While Fetching Data from Database - " + e
			});
		});
});

app.post("/post", (req, res) => {
	const newPost = req.body.post;

	new Post(newPost)
		.save()
		.then((newPost) => {
			console.log("Post Added Successfully");
			res.status(200).json({
				success: true,
				message: "Successfully Created New Post",
				_id: newPost._id
			});
		})
		.catch((e) => {
			console.log(e);
			res.status(500).json({
				success: false,
				message: "Error While Adding New Post - " + e
			});
		});
});

app.put("/post/:id", (req, res) => {
	const { id } = req.params;
	const updatedPost = req.body.post;

	Post.findByIdAndUpdate(id, updatedPost)
		.then(() => {
			console.log("Post Updated Successfully");
			res.json({
				success: true,
				message: "Successfully Updated"
			});
		})
		.catch((e) => {
			console.log(e);
			res.status(500).json({
				success: false,
				message: "Error While Updating - " + e
			});
		});
});

app.delete("/post/:id", (req, res) => {
	const { id } = req.params;

	Post.findByIdAndDelete(id)
		.then(() => {
			console.log("Post Deleted Successfully");
			res.status(200).json({
				success: true,
				message: "Succesfully Deleted"
			});
		})
		.catch((e) => {
			console.log(e);
			res.status(500).json({
				success: false,
				message: "Error While Deleting - " + e
			});
		});
});

// Server Intialisation
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server Started on port ${port}`);
});
