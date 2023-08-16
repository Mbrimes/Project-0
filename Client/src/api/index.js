// import axios from 'axios';

// const API = axios.create({ baseURL: `http://localhost:8080`});

// API.interceptors.request.use((req) => {
// 	if(localStorage.getItem('user')) {
// 		req.headers.authorization = `Bearer ${
// 			JSON.parse(localStorage.getItem('user')).token
// 		}`;
// 	}

// 	return req;
// });

// //Reading route functions 
// export const fetchPosts = () => API.get('/api/reading');
// export const createPost = (newPost) => API.post('/api/reading',newPost);
// export const updatePost = (id, updatedPost) => API.patch(`/api/reading/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/api/reading/${id}`);

// //Read route functions
// export const fetchReadBooks = () => API.get('/api/read');
// export const createReadBook = (newReadBook) => API.post('/api/read', newReadBook);
// export const deleteReadBook = (id2) => API.delete(`/api/read/${id2}`);

// //To be Read route functions
// export const fetchTbrBook = () => API.get('/api/tbr');
// export const createTbrBook = (newTbrBook) => API.post('/api/tbr', newTbrBook);
// export const deleteTbrBook = (id3) => API.delete(`/api/tbr/${id3}`);

import axios from "axios";
import authHeader from "../services/auth-header";
//import {useParams} from 'react-router-dom';

//const {id} = useParams();
const API_URL = "http://localhost:8080/api/";

//Reading route functions
const fetchPosts = () => {
  return axios.get(API_URL + "reading", { headers: authHeader() });
};
const createPost = (newPost) => {
  return axios.post(API_URL + "reading", newPost, { headers: authHeader() });
};
const updatePost = (id,updatedPost) => {
  return axios.patch(API_URL + `reading/${id}`, updatedPost,{ headers: authHeader() });
};
const deletePost = (id) => {
  return axios.delete(API_URL + `reading/${id}`, { headers: authHeader() });
};

//Read route functions
const fetchReadBooks = () => {
  return axios.get(API_URL + "read", { headers: authHeader() });
};
const createReadBook = (newReadBook) => {
  return axios.post(API_URL + "read", newReadBook, { headers: authHeader() });
};
const deleteReadBook = (id) => {
  return axios.delete(API_URL + `read/${id}`, { headers: authHeader() });
};

//To be Read route functions
const fetchTbrBook = () => {
  return axios.get(API_URL + "tbr", { headers: authHeader() });
};
const createTbrBook = (newTbrBook) => {
  return axios.post(API_URL + "tbr", newTbrBook, { headers: authHeader() });
};
const deleteTbrBook = (id) => {
  return axios.delete(API_URL + `tbr/${id}`, { headers: authHeader() });
};

const BookService = {
  fetchPosts,createPost,updatePost,deletePost,fetchReadBooks,createReadBook,deleteReadBook,fetchTbrBook,createTbrBook,deleteTbrBook
};

export default BookService;