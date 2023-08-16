import BookService from '../api';

// Action creators
export const getTbrBook = () => async (dispatch) => {
  try {
    const { data } = await BookService.fetchTbrBook();
    dispatch({ type: 'FETCH_TBR_BOOKS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Create post function
export const createTbrBook = (tbr) => async (dispatch) => {
  try {
    const { data } = await BookService.createTbrBook(tbr);

    dispatch({ type: 'CREATE_TBR_BOOK', payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Delete TBR Function
export const deleteTbrBook = (id) => async (dispatch) => {
  try {
    await BookService.deleteTbrBook(id);

    dispatch({ type: 'DELETE_TBR_BOOK', payload: id });
  } catch (error) {
    console.log(error);
  }
};