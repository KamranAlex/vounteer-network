import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Logo from "../../logos/Group 1329.png";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-light mb-4'>
      <div className='container navigation'>
        <div className='main-logo'>
          <Link to='/' className='navbar-brand'>
            <img src={Logo} alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
        <div
          className='collapse navbar-collapse navigation-manu'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/commingSoon'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/commingSoon'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/myEvents'>
                My Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/admin'>
                <button className='btn btn-primary ml-2 btn-admin'>
                  Admin
                </button>
              </Link>
            </li>
            {loggedInUser.email ? (
              <li className='nav-item '>
                <Link to='/'>
                  <button
                    onClick={() => setloggedInUser({})}
                    className='btn btn-danger ml-2'
                  >
                    Log Out
                  </button>
                </Link>
              </li>
            ) : (
              <li className='nav-item '>
                <Link to='/login'>
                  <button className='btn btn-warning ml-2'>Log In</button>
                </Link>
              </li>
            )}

            <li className='nav-item'>
              <small
                className='nav-link user-name'
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#db1d53 ",
                }}
              >
                {loggedInUser.name}
              </small>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
