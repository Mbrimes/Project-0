const mongoose = require('mongoose');
import ToBeRead from '../models/tbr.js';

//function to retrieve posts
export const tbrPosts = async (req, res) => {
	try{
		const tbrBooks = await ToBeRead.find({ creator: req.userId});
		console.log(tbrBooks);
	} catch (err) {
		res.status(404).json({ message: error.message });
	}
};

// Functionality to add/crete new posts
export const createTbrPost = async (req, res) => {
	const tbrPost = req.body;

	const newTbrBook = new ToBeRead({
		...tbrPost,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	});

	try {
		await newTbrBook.save();

		res.satus(201).json(newTbrBook);
	} catch (err) {
		res.status(409).json({ message: error});
	}
};

//Delete post
export const deleteTbrBook = async (req, res) => {
	const {id} = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`);

	await ToBeRead.findByIdAndRemove(id);

	res.json({ message: 'Post deleted successfully.'});
};