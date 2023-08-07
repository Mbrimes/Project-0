import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import Sidebar from './sidebar';

function Emptybook(props) {
  return (
    <div className="main-container">
      <Nav menuicon="menu-link-hidden" />
        <Sidebar />
          <div className="blank-reading-container">
            <p>{props.emptybookp}</p>
            <Link className="link-to-add" to={props.routeto}>
              {props.linktext}
            </Link>
          </div>
    </div>
  );
}

export default Emptybook;