import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books').then((response) => {
      setResults(response.data);
    });
  }, []);

  const tempTitle = useRef('');

  const createEntry = () => {
    axios.post('http://localhost:5000/addBook', {
      title: tempTitle,
      finished: false,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    createEntry();
  };

  return (
    <>
      <div>
        {results.map((x) => (
          <div>{x.title}</div>
        ))}
      </div>
      <form onSubmit={handleSubmitForm}>
        <input ref={tempTitle} type="text" />
        <input type="hfjf" type="submit" />
      </form>
      </>
  );
}

export default Test;
