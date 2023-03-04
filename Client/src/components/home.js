import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = (props) => {
  const [content, setContent] = useState("");


  useEffect(() => {
   UserService.getPublicContent().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent(
          (error.response && error.response.data) ||
           error.message ||
          error.toString()
          );
      });
  });

    return ( 
      <div>
        <header>
          <h3>{content}</h3>
        </header>
        <h3>JHDBJFDBUJ</h3>
      </div>
    );
  };

export default Home;