const mongoose = require('mongoose');
const PostBook = require('../models/postBook');

// function to retrieving posts
exports.readingPosts = async (req, res) => {
  try {
    const postBooks = await PostBook.find({ creator: req.userId });
    console.log(postBooks);
    res.status(200).json(postBooks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Functionality to add/create new posts
exports.createreadingPost = async (req, res) => {
	const bookPost = req.body;

	const newBookPost = new PostBook({
		...bookPost,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	});

	try {
		await newBookPost.save();

		res.status(201).json(newBookPost);
	} catch (err) {
		res.status(409).json({ message: err})
	}
};

//Updating the posts
exports.updatePost = async (req, res) => {
	const {id} = req.params;
	const post = req.body;
	const {title, author, pageLength, selectedFile, description} = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send(`No post with Id:${id}`);

	const updatePost = {
		title,
		author,
		name,
		pageLength,
		selectedFile,
		description,
		creator,
		_id: id,
	};

	await PostBook.findByIdAndUpdate(id, updatePost, { new: true });
	res.json(updatedPost);
};

// Delete post
exports.deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostBook.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully.' });
};