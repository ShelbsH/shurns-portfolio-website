import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid text-light banner-img">
          <div>
            <h1 className="display-3">Front-End Web Developer</h1>
            <h1 className="lead">I specialize in Front-End development and love building new
              and great things on projects with the latest technologies.
            </h1>
            <button className="btn btn-margin">
              <Link to='/Projects'>See My Projects</Link>
            </button>
          </div>
        </div>

        <div className="container-fluid p-5">
          <div className="text-center header-name">
            <h1 className="skills-header">My skills</h1>
          </div>
        </div>
        <div className="container-fluid container-margin text-center">
          <div className="row">
            <div className="col-md-4">
              <i className="fa fa-file-text-o i-planning" aria-hidden="true"></i>
              <h1 className="p-4 skills-header">Planning</h1>
              <p className="text-left skills-p">I plan on the site’s structure and layout to
                translate my thought process into a beautiful design specification for a great
                user experience.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-pencil i-designing" aria-hidden="true"></i>
              <h1 className="text-center p-4 skills-header">UX/UI Design</h1>
              <p className="text-left skills-p">I sketch and wireframe interfaces and
                translate it into a beautiful modern visual look on modern software</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-code i-coding" aria-hidden="true"></i>
              <h1 className="p-4 skills-header">Code</h1>
              <p className="text-left skills-p">Code Front-End coding combines the fundamental
                principles of planning out the architecture and UX/UI design to craft a
                beautiful modern website with the latest technologies.</p>
            </div>
          </div>
        </div>

        <div className="container-fluid text-light project-container">
          <div className="text-center p-5">
            <h2>My Recent Project</h2>
          </div>
          <div className="row p-5">
            <div className="col-md-6">
              <div></div>
              <h1>Background image goes here</h1>
            </div>
            <div className="col-md-6">
              <h1>Project Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <b/>
              <i className="fa fa-circle i-circle-yellow mr-1" aria-hidden="true"></i>
              <span className="badge badge-dark mr-1">ReactJS</span>
              <span className="badge badge-dark mr-1">ExpressJS</span>
              <span className="badge badge-dark mr-1">Bootstrap 4</span>
              <span className="badge badge-dark mr-1">React-Router</span>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center contact-container p-5">
          <div className="row">
            <div className="col-12">
              <h1 className="m-3">Interested to work together?</h1>
              <h2>I'm currently available. Don't hesitate to shoot me a contact!</h2>
              <button className="btn btn-portfolio m-5">
                <Link to='/Contact'>Contact Me</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
