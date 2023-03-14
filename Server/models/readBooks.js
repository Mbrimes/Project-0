const mongoose = require('mongoose');

const readBookSchema = new mongoose.Schema({
	title: String,
	author: String,
	pageLength: String,
	selectedFile: String,
	description: String,
	creator: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = readBooks = mongoose.model('readBook', readBookSchema);