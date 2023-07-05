import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AuthService from "../../services/auth.service";

import UserService from "../../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      <div>
          <div className="text-container">
              <h1>
                {currentUser
                  ? `Welcome,  ${currentUser.username}`
                  : 'Welcome to Blookify'}
              </h1>
              <p>
                Utilizes over 7 million books and store the books you are
                currently reading and the books that youve finished into your
                own personal library.
              </p>
           
              <div className="button-cont">
                {currentUser ? null : (
                  <Link to="/login" className="btn-1 b-1">
                    Login
                  </Link>
                )}

                <Link to={currentUser ? '/Addbook' : '/register'} className="btn-1 b-2">   Get started
                </Link>
              </div>
            
          </div>
    </div>
    </div>
  );
};

export default Home;