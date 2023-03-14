const mongoose = require('mongoose');

const postBookSchema = new mongoose.Schema({
	title: String,
	author: String,
	name: String,
	pageLength: String,
	selectedFile: String,
	description: String,
	creator: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = postBooks = mongoose.model('postBook', postBookSchema);