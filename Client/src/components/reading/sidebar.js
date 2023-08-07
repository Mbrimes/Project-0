import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookMedical } from 'react-icons/fa';
import { GiBookshelf, GiBurningBook, GiBookCover } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
//import Booksvg from '../svgs/booksvg';
//import Readsvg from '../svgs/read';
//import Mag from '../svgs/add';

const Sidebar = () =>{
	return(
		<div className="nav-side-bar">
				<Link to="/" className="home-link">
				<AiFillHome className="home-icon"/>
				</Link>
				<ul className="nav-list">
					<li className="nav-items">
						<Link to="/currentlyreading" className="link-area">
							<GiBookCover className="icons"/>
							<p>Reading</p>
						</Link>
					</li>
					<li className="nav-items">
						<Link to="/read" className="link-area">
							<GiBookshelf className="icons"/>
							<p>Read</p>
						</Link>
					</li>
					<li className="nav-items">
						<Link to="/toberead" className="link-area">
							<GiBurningBook className="icons"/>
							<p> To be Read </p>
						</Link>
					</li>
					<li className="nav-items">
						<Link to="/Addbook" className="link-area">
							<FaBookMedical className="icons"/>
							<p>Add Book</p>
						</Link>
					</li>
				</ul>
		</div>

		);
};
export default Sidebar;