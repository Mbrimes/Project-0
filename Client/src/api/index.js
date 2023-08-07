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
export const fetchPosts = () => API.get('/api/reading');
export const createPost = (newPost) => API.post('/api/reading',newPost);
export const updatePost = (id, updatedPost) => API.patch(`/api/reading/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/reading/${id}`);

//Read route functions
export const fetchReadBooks = () => API.get('/api/read');
export const createReadBook = (newReadBook) => API.post('/api/read', newReadBook);
export const deleteReadBook = (id2) => API.delete(`/api/read/${id2}`);

//To be Read route functions
export const fetchTbrBook = () => API.get('/api/tbr');
export const createTbrBook = (newTbrBook) => API.post('/api/tbr', newTbrBook);
export const deleteTbrBook = (id3) => API.delete(`/api/tbr/${id3}`);
