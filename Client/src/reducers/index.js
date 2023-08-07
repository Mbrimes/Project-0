import { combineReducers } from 'redux';

import posts from './posts';
import read from './readbooks';
import tbr from './tbr';
export default combineReducers({ posts, read, tbr });