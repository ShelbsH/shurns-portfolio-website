import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/home.scss';

class Home extends React.Component {
  render() {
    return (
      
      <div className="container-fluid">
        <section>
          <div className="row text-center text-light banner-img">
            <div className="col-12">
              <h1 className="display-3">Front-End Web Developer</h1>
              <p className="lead">I specialize in Front-End development and love building new
                and great things on projects with the latest technologies.
              </p>
              <button className="btn btn-portfolio m-5">
                <Link to='/Projects'>See My Projects</Link>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="row my-5">
            <div className="col-12">
              <h2 className="text-center skills-header">My Skills</h2>
            </div>
          </div>
          <div className="row text-center py-5">
            <div className="col-md-4">
              <i className="fa fa-file-text-o mb-3 icon-fonts" aria-hidden="true"></i>
              <h2 className="mb-3 skills-header-example">Planning</h2>
              <p className="text-left skills-p">I plan on the site’s structure and layout to
                translate my thought process into a beautiful design specification for a great
                user experience.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-pencil mb-3 icon-fonts" aria-hidden="true"></i>
              <h2 className="mb-3 skills-header-example">UX/UI Design</h2>
              <p className="text-left skills-p">I sketch and wireframe interfaces and
                translate it into a beautiful modern visual look on modern software</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-code mb-3 icon-fonts" aria-hidden="true"></i>
              <h2 className="mb-3 skills-header-example">Code</h2>
              <p className="text-left skills-p">Code Front-End coding combines the fundamental
                principles of planning out the architecture and UX/UI design to craft a
                beautiful modern website with the latest technologies.</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="row project-bg-color py-5">
            <div className="col-12">
              <h2 className="text-center text-light">My Recent Project</h2>
            </div>
          </div>
          <div className="row text-light project-bg-color py-5">
            <div className="col-md-6">
              <p>Background image goes here</p>
            </div>
            <div className="col-md-6">
              <h2>Project Name</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <b/>
              <i className="fa fa-circle icon-fonts-circle mr-2" aria-hidden="true"></i>
              <span className="badge badge-dark mr-2">ReactJS</span>
              <span className="badge badge-dark mr-2">ExpressJS</span>
              <span className="badge badge-dark mr-2">Bootstrap 4</span>
              <span className="badge badge-dark mr-2">React-Router</span>
            </div>
          </div>
        </section>
        
        <section>
          <div className="row contact-container py-5">
            <div className="col-12">
              <h2 className="m-3">Interested to work together?</h2>
              <p className="lead">I'm currently available. Don't hesitate to shoot me a contact!</p>
              <button className="btn btn-portfolio m-5">
                <Link to='/Contact'>Contact Me</Link>
              </button>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Home;
