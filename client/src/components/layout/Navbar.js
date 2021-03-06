import React, {Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import logo from "./images/logo.png";
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({title,icon }) => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated, logout, user} = authContext;
  const onLogout=()=>{
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>
        Hello {user&&user.name}
        {isAuthenticated}
      </li>
      <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/savedlist'>Saved</Link>
        </li>
      <li>
      <a onClick={onLogout} href='/login'>
        <i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span>
      </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
    </Fragment>
  );
  return(
    <div className='navbar bg-primary'>
      <h1>
      <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
      </h1>
      <ul>
        {isAuthenticated? authLinks : guestLinks}
      </ul>
    </div>

  )
  };
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Git Techie',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;