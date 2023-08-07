import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../navbar';
import Sidebar from './sidebar';
import BookPost from './bookpost';
import Emptybook from './emptybook';
import { getPosts } from '../../actions/posts';

const CurrentlyReading = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	//Retriving post Data
	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	const posts = useSelector((state) => state.posts);

	//Ternary operator keeping page blank if no posts are there
	return !posts.length ? (
		//Component that has an empty box since no books have been posted
		<Emptybook
			emptybookp="No Books has been uploaded here yet!"
			routeto="/Addbook"
			linktext="Add a book here!"
		/>
		) : (
		<div className="main-container">
			<Nav className= "menu-link-hidden"/>
			<div bottom cascade>
				<h1 className="currently-reading-h1">Currently Reading</h1>
			</div>
			<div className="profile-row">
				<Sidebar/>
				<div className= "reading-container">
					{posts.map((post) => (
						<BookPost
							key={post._id}
							post={post}
							setCurrentId={setCurrentId}
							currentId={currentId} /> ))} </div>
					</div>
		</div>
		);
};

export default CurrentlyReading;