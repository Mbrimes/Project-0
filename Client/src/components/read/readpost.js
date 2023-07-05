import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import { FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteReadBook } from '../../actions/readposts';

const ReadPost = ({ post }) => {
	const [deleteBook, setDeleteBook] = useState(false);
	const ToggleDelete = () => {
		setDeleteBook(!deleteBook);
	};
	const dispatch = useDispatch();
	return(
		<div>
			<zoom>
			<div>
				<div>
					<h4>{post.title}</h4>
					<img className="post-image" src={post.selectedFile} alt=""/>
				</div>
				<div>
					<h3> Author: {post.author} </h3>
					<p>Page Count: {post.pageLength}</p>
					<h3>Description</h3>
					<p>{post.description}</p>
					<div>
						{/* Delete Book */}
						<Button className="Delete-button" onClick={ToggleDelete}>
							<DeleteIcon fontSize="medium"/>
						</Button>
					</div>

				{/* Delete Book Modal*/}
				<Flip top opposite when={!deleteBook}>
				<div className={deleteBook ? 'blank-delete': 'delete-book-container'}>
					<p> Delete Book? </p>
					<div>
						<Button classname="btn" onClick={() => {
							dispatch(deleteReadBook(post._id));
						}} > yes 
						</Button>
						<Button className="no-btn" onClick={() => {
							ToggleDelete();
						}}> No
						</Button>

					</div>
				</div>
				</Flip>
				<p classNmae="date-added">
				Book added {(post.createdAt).fromNow()}</p>
				</div>
			</div>
			</zoom>
		</div>
		);
};

export default ReadPost;