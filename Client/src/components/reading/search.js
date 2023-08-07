import React from 'react';
import Bookmodal from './addbookmodal';

function Search(props) {
	return (
		<div className="search-bar">
			<h1>Search for a new book:</h1>
			<div className="search-cont">
				<input
					value={props.value}
					type="text"
					className="book-search"
					placeholder={props.placeholder}
					onChange={props.onChange}
				/>
			</div>
			<Bookmodal/>
		</div>
		);
};

export default Search;