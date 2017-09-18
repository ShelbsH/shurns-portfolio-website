import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <nav className="navbar navbar-expand-sm header-bg-color">
          <a className="navbar-brand">Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-nav">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link"><Link to='/'>Home</Link></a></li>
              <li className="nav-item"><a className="nav-link"><Link to='/Projects'>Projects</Link></a></li>
              <li className="nav-item"><a className="nav-link"><Link to='/Contact'>Contact</Link></a></li>
            </ul>
          </div>
        </nav>
      /*
      *<ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Projects'>Projects</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      */
    )
  }
}

export default Header;
