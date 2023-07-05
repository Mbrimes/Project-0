import * as api from '../api';

// Action creators
export const getTbrBook = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTbrBook();
    dispatch({ type: 'FETCH_TBR_BOOKS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Create post function
export const createTbrBook = (tbr) => async (dispatch) => {
  try {
    const { data } = await api.createTbrBook(tbr);

    dispatch({ type: 'CREATE_TBR_BOOK', payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Delete TBR Function
export const deleteTbrBook = (id3) => async (dispatch) => {
  try {
    await api.deleteTbrBook(id3);

    dispatch({ type: 'DELETE_TBR_BOOK', payload: id3 });
  } catch (error) {
    console.log(error);
  }
};