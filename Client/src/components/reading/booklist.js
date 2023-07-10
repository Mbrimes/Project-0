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
  		<div className="booklist">
  			<img 
  				value={props.imgvalue}
  				src={props.imgurl ? props.imgurl['thumbnail'] : pic1}
  				className="img"
  				alt={props.alt} 
  			/>
  			<h1 className="title-header" value={props.titleValue}> {props.title} </h1>
  			<p className="author-p">Author: {props.author}</p>
  			<p className="pg-count"> pg count: {props.pgcount ? props.pgcount : 'N/A'} </p>
  			<div className="add-book">
  				<p className={popup ? 'popup' : 'none'}> Send to Reading 
  					<span><FaCaretDown className="caretdown"/></span>
  				</p>
  				<GiBookCover 
  					onMouseEnter={TogglePopup}
  					onMouseLeave={TogglePopup}
  					onClick={ (e) => {
  						handleSubmit(e);
  						props.Toggle(e);
  					}}/>
  			</div>
  			<div className="add-book">
  				<p className = {popup2 ? 'popup' : 'none'}> Send to Read
  				<span> <FaCaretDown/></span></p>
  				 <GiBookshelf
		          onMouseEnter={TogglePopup2}
		          onMouseLeave={TogglePopup2}
		          onClick={(e) => {
		            readSubmit(e);
		            props.Toggle(e);
		          }}
		          className="check-mark"
		        />
  			</div>
  			<div className="add-book">
  			<p className= {popup3 ? 'popup' : 'none'}> Send to TBR
  			<span>
  			<FaCaretDown /></span></p>
  			<GiBurningBook 
  				onMouseEnter={TogglePopup3}
  				onMouseLeave={TogglePopup3}
  				onClick={(e) => {
  					tbrSubmit(e);
  					props.Toggle(e);
  				}}/>
  				</div>
  		</div>
  		);
}

export default Booklist;