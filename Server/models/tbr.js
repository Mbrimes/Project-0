const mongoose = require('mongoose');

const tbrSchema = new mongoose.Schema({
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

module.exports = tbr = mongoose.model('ToBeRead', tbrSchema);