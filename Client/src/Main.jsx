import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import AuthService from "./services/auth.service";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./components/Login/Home";
import Profile from "./components/Login/Profile";
import BoardUser from "./components/Login/BoardUser";
import EventBus from "./common/EventBus";
//import CreateBook from './components/CreateBook';
//import ShowBookList from './components/ShowBookList';
//import ShowBookDetails from './components/ShowBookDetails';
//import UpdateBookInfo from './components/UpdateBookInfo';
//import Test from './components/test';
import Addbook from './components/reading/Addbook';
import CurrentlyReading from './components/reading/currentlyreading';
import Read from './components/read/read';
import ToBeRead from './components/tbr/toberead';
//import Nav from './components/navbar';
import { getPosts } from './actions/posts.js';
import { getReadBook } from './actions/readposts.js';
import { useDispatch } from 'react-redux';


const Main = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  useEffect(() => {
    dispatch(getReadBook(), getPosts());
  }, [dispatch]);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="">
        <Link to={"/"} className="">
          Marabian Reader
        </Link>
        <div className="">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
         {/* <Route exact path='/showbook' element={<ShowBookList />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />*/}
          <Route path="/addbook" element={<Addbook/>} />
        <Route path="/currentlyreading" element={<CurrentlyReading/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/toberead" element={<ToBeRead/>} />
        </Routes>
      </div>

    </div>
  );
};

export default Main;