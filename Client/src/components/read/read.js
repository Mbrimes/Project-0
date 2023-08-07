import React from 'react';
import {useSelector} from 'react-redux';
import Nav from '../navbar';
import ReadPost from './readpost';
import Sidebar from '../reading/sidebar';
import Emptybook from '../reading/emptybook';

const Read = () => {
	const readBooks = useSelector((state) => state.read);

	return (
		!readBooks.length ? (
		<Emptybook 
			emptybook= "You have no finished books here yet!"
			routeto= '/currentlyreading'
			linktext= 'Go to reading page here'
			/>
		) : (
		<div className="main-container">
			<Nav menuicon= "menu-link-hidden"/>
			
				<h1 className="currently-reading-h1"> Read books </h1>
			
			<div className="profile-row">
				<sidebar/>
				<div className="reading-container">
					{readBooks.map((post) => (
						<ReadPost
							key={post._id}
							post={post}
							/>
							))}
				</div>
				</div>
				</div> 
	)
		);
};

export default Read;
