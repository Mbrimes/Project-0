import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import { button } from '@material-ui/core';
//import DeleteIcon from '@material-ui/icons/Delete';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { deletePost } from '../../actions/posts';
import { createReadBook } from '../../actions/readposts';
import EditForm from './editform';

const BookPost = ({ post, currentId, setCurrentId }) => {
	//Data for read Books
	const readBookData ={
		title: post.title,
		author: post.author,
		pageLength: post.pageLength,
		description: post.description,
		selectedFile: post.selectedFile,
	};

	const dispatch = useDispatch();

	const [BookEdit, setBookEdit] = useState('false');
	const [deleteBook, setDeleteBook] = useState('false');
	const [readBook, setReadBook] = useState('false');

	const ToggleEdit = () => {
		setBookEdit(!BookEdit);
	};
	const ToggleDelete = () => {
		setDeleteBook(!deleteBook);
	};
	const ToggleRead = () => {
		setReadBook(!readBook);
	};

	// Submit function to send read bookdata to be sent to api/route
	const handleSubmit = () => {
		console.log(readBookData);
		dispatch(createReadBook(readBookData));
	};
	return(
		<div className="book-card">
			<div className="inner-card">
				<div className="top-info">
					<h4>{post.title}</h4>
					<img className="post-image" src={post.selectedFile} alt=""/>
				</div>
				<div classname="bottom-info">
					<h3>Author: {post.author}</h3>
					<p className="pagecount-p"> Page Count: {post.pageLength}</p>
					<h3 className="description-h3"> Description: </h3>
					<p className="description"> {post.description} </p>
					<div className="button-container">
				{/* Done Reading button */}
						<button className="done-button" onClick = {ToggleRead}>
							<FaCheck />
						</button>
					{/* Delete Book */}
					<button className="delete-button" onClick={ToggleDelete}>
						DeleteButton
					</button>
					</div>
				{/* Read container */}
				<div className = {readBook ? 'blank-delete' : 'done-reading-cont'}>
					<p> Finished Reading? </p>
					<div className = "delete-button">
						<button className="yes-btn" onClick={(e) => {
							handleSubmit();
							dispatch(deletePost(post._id));
						}}> Yes </button>
						<button className="no-btn" onClick={ToggleRead}> No </button>
					</div>
				</div>

				{/* Delete book modal */}
				<div className={deleteBook ? 'blank-delete' : 'delete-book-container'}>
					<p>Delete Book?</p>
					<div className="delete-button">
						<button className="yes-btn" onClick={() => {
							dispatch(deletePost(post._id));
						}}> Yes </button>
						<button className="no-btn" onClick={() => {
							ToggleDelete();
						}}> No </button>
					</div>
				</div>
				<p className="date-added">
					Book added(post.createdAt)
				</p>

				</div>
			</div>
		</div>
		);

};

export default BookPost;