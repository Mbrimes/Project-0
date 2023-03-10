import React, { useState, useEffect } from 'react';
import '../build/css/Main.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/books')
			.then((res) => {
				setBooks(res.data);
			})
			.catch((err) => {
				console.log('Error from ShowBookList');
			});
	}, []); 

	const bookList = books.length === 0 ? 'there is no book record!'
		: books.map((book, k) => <BookCard book={book} key={k} />);


	return (
		<div className='ShowBookList'>
			<div className='container'>
			<div className='row'>
				<div className=''>
				<br/>
				<h2 className='text-center'> Books List </h2>
				</div>

				<div className=''>
					<Link
						to='/create-book'
						className=''>
							+ Add New Book
					</Link>
					<br/>
					<br/> <hr/>
				</div>
			</div>


        <div className='list'>{bookList}</div>
      </div>
    </div>
		);
}

export default ShowBookList;