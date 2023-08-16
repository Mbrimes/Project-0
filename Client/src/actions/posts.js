import BookService from '../api';

//Action creators
export const getPosts = () => async (dispatch) => {
	try{
		const {data} = await BookService.fetchPosts();
		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch(error) {
		console.log(error);
	}
};

//Create Post Function
export const createPost = (post) => async (dispatch) => {
	try{
		const{data} = await BookService.createPost(post);
		dispatch({ type: 'CREATE', payload: data});
	} catch(error){
		console.log(error.message);
	}
};

//Update Post
export const updatePost = (id, post) => async(dispatch) => {
	try{
		const {data} = await BookService.updatePost(id, post);
		dispatch({ type: 'UPDATE', payload: data});
	} catch(error){
		console.log(error);
	}
};

//Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    await BookService.deletePost(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error);
  }
};