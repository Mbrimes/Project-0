export default (read = [], action) => {
  switch (action.type) {
    case 'FETCH_READ_BOOKS':
      return action.payload;
    case 'CREATE_READ_BOOK':
      return [...read, action.payload];
    case 'DELETE_READ_BOOK':
      return read.filter((readpost) => readpost._id !== action.payload);
    default:
      return read;
  }
};