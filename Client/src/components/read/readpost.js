import React, {useState} from 'react'; 
//import { FaCheck } from 'react-icons/fa'; 
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
			<div>
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
						<button className="Delete-button" onClick={ToggleDelete}>
							XX
						</button>
					</div>

				{/* Delete Book Modal*/}
				<div className={deleteBook ? 'blank-delete': 'delete-book-container'}>
					<p> Delete Book? </p>
					<div>
						<button classname="btn" onClick={() => {
							dispatch(deleteReadBook(post._id));
						}} > yes 
						</button>
						<button className="no-btn" onClick={() => {
							ToggleDelete();
						}}> No
						</button>

					
				</div>
				</div>
				<p classNmae="date-added">
				Book added {(post.createdAt).fromNow()}</p>
				</div>
			</div>
			</div>
		</div>
		);
};

export default ReadPost;