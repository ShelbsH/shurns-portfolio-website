import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Projects'>Projects</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;
