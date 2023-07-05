import * as api from '../api';

//Action Creators
export const getReadBook = () => async (dispatch) =>{
	try {
		const {data} = await api.fetchReadBooks();
		dispatch({ type: 'FETCH_READ_BOOKS', payload: data});
	} catch (error) {
		console.log(error);
	}
};

//Create Post Function
export const createReadBook = (read) => async (dispatch) => {
	try {
		const {data} = await api.createReadBook(read);
		dispatch({ type: 'CREATE_READ_BOOK', payload: data });
	} catch (error) {
		console.log(error);
	}
};

//Delete Post Function
export const deleteReadBook = (id2) => async (dispatch) => {
  try {
    await api.deleteReadBook(id2);

    dispatch({ type: 'DELETE_READ_BOOK', payload: id2 });
  } catch (error) {
    console.log(error);
  }
};