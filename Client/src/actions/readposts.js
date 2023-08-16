import BookService from '../api';

//Action Creators
export const getReadBook = () => async (dispatch) =>{
	try {
		const {data} = await BookService.fetchReadBooks();
		dispatch({ type: 'FETCH_READ_BOOKS', payload: data});
	} catch (error) {
		console.log(error);
	}
};

//Create Post Function
export const createReadBook = (read) => async (dispatch) => {
	try {
		const {data} = await BookService.createReadBook(read);
		dispatch({ type: 'CREATE_READ_BOOK', payload: data });
	} catch (error) {
		console.log(error);
	}
};

//Delete Post Function
export const deleteReadBook = (id) => async (dispatch) => {
  try {
   await BookService.deleteReadBook(id); 
    dispatch({ type: 'DELETE_READ_BOOK', payload: id });
  } catch (error) {
    console.log(error);
  }
};