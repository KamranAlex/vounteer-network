import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logos/user-alt 1.png`}
            alt=''
          />
        </a>
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
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/myEvents'>
                My Events
              </Link>
            </li>
            <li className='nav-item '>
              <Link to='/'>
                <button className='btn btn-primary ml-2'>Admin</button>
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
              <small className='nav-link text-success'>
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
