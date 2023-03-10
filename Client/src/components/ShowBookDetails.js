import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../build/css/Main.css';
import axios from 'axios';


function ShowBookDetails (props){
	const [book, setBook] = useState({});

	const {id} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/books/${id}`)
			.then((res) => {
				setBook(res.data);
			})
			.catch((err) => {
				console.log('Error from ShowBookDetails');
			});
	}, [id]);

	const onDeleteClick = (id) => {
		axios
			.delete(`http://localhost:8080/api/books/${id}`)
			.then((res) => {
				navigate('/');
			})
			.catch((err) => {
				console.log('Error from ShowBookDetails_deleteClick');
			});
	};

	const BookItem = (
		<div>
			<table className = ''>
			<tbody>
			<tr>
				<th scope='row'>1</th>
				<td>Title</td>
				<td>{book.title}</td>
			</tr>
			<tr>
				<th scope='row'>2</th>
				<td>Author</td>
				<td>{book.author}</td>
			</tr>
			<tr>
				<th scope='row'>3</th>
				<td>ISBN</td>
				<td>{book.isbn}</td>
			</tr>
			<tr>
				<th scope='row'>4</th>
				<td>publisher</td>
				<td>{book.publisher}</td>
			</tr>
			<tr>
				<th scope='row'>5</th>
				<td>Published Date</td>
				<td>{book.published_date}</td>
			</tr>
			<tr>
				<th scope='row'>6</th>
				<td>Description</td>
				<td>{book.description}</td>
			</tr>
		</tbody>
		</table>
	</div>
	);


  return (
    <div className='ShowBookDetails'>
    	<div className='container'>
    	<div className='row'>
    	<div className=''>
    	<br/><br/>
    	<Link to='/' className='f-left'>Show Book List </Link>
    	</div>
    	<br/>
    	<div className='m-auto'>
    		<h1 className='text-center'> Book's Record</h1>
    		<p className='text-center'> View Book's Info </p>
    		<hr/> <br/>
    	</div>
    	<div className='m-auto'>{BookItem}</div>
    	<div className='m-auto'>
    		<button 
    			type='button'
    			className=''
    			onClick={() => {
    				onDeleteClick(book._id);
    			}}> Delete Book </button>
    	</div>
    	<div className='m-auto'>
    		<Link to={`/edit-book/${book._id}`} className=''>
    			 Edit Book </Link>
    	</div>
    	</div>
    	</div>
    </div>
  );
}

export default ShowBookDetails;