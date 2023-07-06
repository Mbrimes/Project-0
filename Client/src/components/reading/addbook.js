import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../navbar';
import Search from './search';
import Booklist from './booklist';
import Sidebar from './sidebar';
import book1 from '../../assets/successbook.png';

function Pro() {
	const [section, setSection] = useState([]);
	const [input, setInput] = useState('');
	const [error, setError] = useState();

	const changeInput = (e) => {
		setInput(e.target.value);
	};

	useEffect (() => {
		const request = () => {
			if (input.length >= 3) {
				axios
				.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&key=AIzaSyDLVd6ZQY0u7IWA0fqW2U8lUhrZSBF2ZI4`)
				.then((book) => {
					setSection(book.data.items);
				})
				.catch((error) => {
					setError(error);
				});
			} else {
				setSection([]);
			}
		};
		request();
	}, [input, setInput]);

	const [modal, setModal] = useState('false');

	const toggleModal = () => {
		setModal(!modal);
	};

	if (error || !Array.isArray(section)) {
		window.location.reload(false);
	}
	return(
		<div>
			<Nav menuicon="menu-link-hidden"/>
			<div className={modal ? 'empty' : 'added-modal'}>
				<div className="added-inner-modal">
					<button className="exit-button" onClick={toggleModal}> X </button>
					<img src={book1} alt-"fix image"/>
					<Slide>
					<h1> Successfully added book!</h1>
					<p> View your reading book section or add another book?</p>
					<div>
						<button className="add-button" onClick={toggleModal}>
						Add another book
						</button>
						<Link className="link" to="/currentlyreading"> Go to reading Page </Link>
					</div>
					</Slide>
				</div>
			</div>

			<Row>
				<Sidebar>
				<Search 
					inputvalue={input}
					onChange={changeInput}
					placeholder="Search title here..."
					placeholder="Author" />

				<div className="booklist-cont">
					{section.map((data) => (
						<Booklist 
							key={data.id ? data.id: ''}
							imgurl={data.volumeInfo.imageLinks}
							alt={data.volumeInfo.title}
							title={data.volumeInfo.title? data.volumeInfo.title: 'no title found'}
							author={ data.volumeInfo.authors ? data.volumeInfo.authors : 'N/A'}
							pgcount= { data.volumeInfo.pageCount }
							description= { data.volumeInfo.description? data.volumeInfo.description: 'no description'}
							link = {data.selfLink}
							Toggle={toggleModal}
						/>
						))}
				</div>
			</Row>
		</div>
		);
}

export default Pro;