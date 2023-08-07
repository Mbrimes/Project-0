export default (tbr = [], action) => {
  switch (action.type) {
    case 'FETCH_TBR_BOOKS':
      return action.payload;
    case 'CREATE_TBR_BOOK':
      return [...tbr, action.payload];
    case 'DELETE_TBR_BOOK':
      return tbr.filter((tbrpost) => tbrpost._id !== action.payload);
    default:
      return tbr;
  }
};