import axios from 'axios';

const API = axios.create({ baseURL: `https://marabian-book-library.onrender.com`});

API.interceptors.request.use((req) => {
	if(localStorage.getItem('user')) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem('user')).token
		}`;
	}

	return req;
});

//Reading route functions 
export const fetchPosts = () => API.get('/reading');
export const createPost = (newPost) => API.post('/reading',newPost);
export const updatePost = (id, updatedPost) => API.patch(`/reading/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/reading/${id}`);

//Read route functions
export const fetchReadBooks = () => API.get('/read');
export const createReadBook = (newReadBook) => API.post('/read', newReadBook);
export const deleteReadBook = (id2) => API.delete(`/read/${id2}`);

//To be Read route functions
export const fetchTbrBook = () => API.get('/tbr');
export const createTbrBook = (newTbrBook) => API.post('/tbr', newTbrBook);
export const deleteTbrBook = (id3) => API.delete(`/tbr/${id3}`);
