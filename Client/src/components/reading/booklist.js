import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GiBookshelf, GiBurningBook, GiBookCover } from 'react-icons/gi';
import { FaCaretDown, FaBook } from 'react-icons/fa';
//
import { createPost } from '../../actions/posts';
import { createReadBook } from '../../actions/readposts';
import { createTbrBook } from '../../actions/tbr';
// img
import pic1 from '../../assets/noimage.png';

function Booklist(props) {
	const bookData = {
		title: props.title,
		author: props.author[0],
		pageLength: props.pgcount,
		selectedFile: props.imgurl ? props.imgurl['thumbnail'] : pic1,
		description: props.description ? props.description : 'No description',
	};

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(bookData));
	};

	const readSubmit = (e) => {
		e.preventDefault();
		dsipatch(createReadBook(bookData));
	};

	const tbrSubmit = (e) => {
		e.preventDefault();
		dispatch(createTbrBook(bookData));
	};

	const [popup, setPopup] = useState(false);
  	const [popup2, setPopup2] = useState(false);
  	const [popup3, setPopup3] = useState(false);
  	const TogglePopup = () => {
  		setPopup(!popup);
  	};
  	const TogglePopup2 = () => {
  		setPopup2(!popup2);
  	};
  	const TogglePopup3 = () => {
  		setPopup3(!popup3);
  	};

  	return(
  		<div></div>
  		);
}