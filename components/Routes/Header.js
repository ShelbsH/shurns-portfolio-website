import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/header.scss';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm header-bg-color">
        <NavLink className="nav-brand-color" to='/'>Portfolio</NavLink>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-nav"
          aria-controls="navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-nav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link link-color" to='/'>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link link-color" to='/Projects'>Projects</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link link-color" to='/Contact'>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
