const mongoose = require('mongoose');
const ReadBook = require('../models/readBooks');
 

//function to retrieving posts
exports.readPosts = async (req, res) => {
	try {
		const readBooks =  await ReadBook.find({ creator: req.userId });
		console.log(readBooks);
		res.status(200).json(readBooks);
	} catch ( err ) {
		res.status(404).json({ message: error.message});
	}
};

//Functionality to add/create new posts
exports.createReadPost = async (req, res) => {
	const bookPost = req.body;

	const newReadPost = new ReadBook({
		...bookPost,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	});

	try {
		await newReadPost.save();

		res.satus(201).json(newReadPost);
	} catch (err) {
		res.status(409).json({ message: error });
	}
};

//Delete post
exports.deleteReadBook = async (req, res) => {
	 const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await ReadBook.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully.' });
};