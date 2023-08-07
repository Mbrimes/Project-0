import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";
//import decode from 'jwt-decode';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
//import { useDispatch } from 'react-redux';
function Nav(props) {
  const [click, setClick] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [profileDrop, setProfileDrop] = useState(false);

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

   const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
  //const history = useHistory();
//  const location = useLocation();
  // const logout = () => {
  //   dispatch({ type: 'LOGOUT' });
  //   history.push('/');
  //   setUser(null);
  //   window.location.reload(false);
  // };
  // const logoutExpire = () => {
  //   dispatch({ type: 'LOGOUT' });
  //   history.push('/Login');
  //   setUser(null);
  //   window.location.reload(false);
  // };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const ToggleProfile = () => setProfileDrop(!profileDrop);

  // useEffect(() => {
  //   const token = user?.token;

  //   // JWT
  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logoutExpire();
  //   }
  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // }, [location]);
  return (
    <div>
      <nav className="nav-bar">
        {currentUser ? (
          <AiOutlineMenu
            onClick={handleClick}
            className={props.menuicon}
            size="40px"
          />
        ) : null}

        <Link to="/" className="homepagelink">
          Blookify
        </Link>
        {/* User logged in/out logic */}
        {currentUser ? (
          <div className="user-profile">
            <img
              src=""
              alt=""
              className="user-img"
              onClick={ToggleProfile}
            />
            <div className={profileDrop ? 'dropdownmenu' : 'hiddenmenu'}>
              <p className="user-p">User: {currentUser.username}</p>
              <button className="logout-button" onClick={logOut}>
                LogOut <FiLogOut className="logout-btn" />
              </button>
            </div>
          </div>
        ) : (
          <Link to="/Login" className="loginlink">
            Login
          </Link>
        )}
        {/* NAV items */}
      </nav>

      <div className={click ? 'side-menu-container' : 'side-menu-closed'}>
        <div
          className={click ? 'side-menu-parent' : 'side-menu-closed'}
          onClick={handleClick}
        ></div>
        <h1 onClick={handleClick} className="close-btn">
          X
        </h1>
        <h1 className="menu-h1">Menu</h1>
        <Link to="/" onClick={closeMobileMenu} className="menu-link-1">
          Home
        </Link>
        <Link
          to={currentUser ? '/addbook' : '/login'}
          onClick={closeMobileMenu}
          className="menu-link-1 link-mid"
        >
          Add a book!
        </Link>
        <Link
          to={currentUser ? '/currentlyreading' : '/login'}
          onClick={closeMobileMenu}
          className="menu-link-1"
        >
          Currently reading
        </Link>
        <Link
          to={currentUser ? '/read' : '/login'}
          onClick={closeMobileMenu}
          className="menu-link-1 link-mid"
        >
          My finished books
        </Link>
        <Link
          to={currentUser ? '/toberead' : '/login'}
          onClick={closeMobileMenu}
          className="menu-link-1 link-mid"
        >
          To be read
        </Link>
        {currentUser ? (
          <button className="menu-logout" onClick={logOut}>
            LogOut <FiLogOut className="logout-btn" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
