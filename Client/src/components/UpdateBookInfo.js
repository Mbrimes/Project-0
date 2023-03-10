import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../build/css/Main.css';

function UpdateBookInfo(props) {
	const [book, setBook] = useState({
		title: '',
		isbn: '',
		author: '',
		description: '',
		published_date: '',
		publisher: '',
	});

	const {id} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/books/${id}`)
			.then((res) => {
				setBook({
					title: res.data.title,
					isbn: res.data.isbn,
					author: res.data.author,
					description: res.data.description,
					published_date: res.data.published_date,
					publisher: res.data.publisher,
				});
			})

			.catch((err) => {
				 console.log('Error from UpdateBookInfo');
			});
	}, [id]);

	const onChange = (e) => {
		setBook({...book, [e.target.name]: e.target.value});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const data = {
			title: book.title,
			isbn: book.isbn,
			author: book.author,
			description: book.description,
			published_date: book.published_date,
			publisher: book.publisher
		};

		axios
			.put(`http://localhost:5000/api/books/${id}` , data)
			.then((res) => {
				navigate(`/show-book/${id}`);
			})
			.catch((err) => {
				console.log('Error in UpdateBookInfo!');
			});
	};

	return (
		<div className= 'UpdateBookInfo'>
		<div className= 'container'>
			<div className = 'row'>
			<div className='m-auto'>
			<br/>
			<Link to='/' className='f-left'> Show Book List </Link>
			</div>
			<div className= 'm-auto'>
				<h1 className='text-center'>Edit Book</h1>
				<p className='text-center'>Update Book's Info </p>
			</div>
			</div>

			<div className= 'm-auto'>
				<form noValidate onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						placeholder= 'Title of the Book'
						name= 'title'
						className= 'form-control'
						value={book.title}
						onChange={onChange}
					/>
				</div>
				<br/>

				<div className='form-group'>
                <label htmlFor='isbn'>ISBN</label>
                <input
	                type='text'
	                placeholder='ISBN'
	                name='isbn'
	                className='form-control'
	                value={book.isbn}
	                onChange={onChange}
	              />
	            </div>
           		 <br />

           		<div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input
	                type='text'
	                placeholder='Author'
	                name='author'
	                className='form-control'
	                value={book.author}
	                onChange={onChange}
	              />
	            </div>
           		 <br />

           		<div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input
	                type='text'
	                placeholder='Description of the Book'
	                name='description'
	                className='form-control'
	                value={book.description}
	                onChange={onChange}
	              />
	            </div>
           		 <br />

           		 <div className='form-group'>
                <label htmlFor='published_date'>Published Date</label>
                <input
	                type='text'
	                placeholder='Published Date'
	                name='published_date'
	                className='form-control'
	                value={book.published_date}
	                onChange={onChange}
	              />
	            </div>
           		 <br />

           		 <div className='form-group'>
                <label htmlFor='publisher'>Publisher</label>
                <input
	                type='text'
	                placeholder='Publisher of the Book'
	                name='publisher'
	                className='form-control'
	                value={book.publisher}
	                onChange={onChange}
	              />
	            </div>
           		 <br />

           		 <button type='submit' className=''> Update Book </button>
           	</form>
        </div>
        </div>
        </div>
		);
}

export default UpdateBookInfo;