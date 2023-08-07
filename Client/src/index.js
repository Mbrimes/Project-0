import React from "react"; 
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Main />
  </Provider>
  </BrowserRouter>
);