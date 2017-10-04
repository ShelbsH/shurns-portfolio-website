import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProjectScreenshot, ProjectName, ProjectDescription, TechTags } from '../utils';
import '../../styles/components/home.scss';

class Home extends React.Component {
  render() {

    const data = this.props.data[0];

    return (
      <div className="container-fluid">
        <section>
          <div className="row text-center text-light banner-img">
            <div className="col-12">
              <h1 className="display-3">Front-End Web Developer</h1>
              <p className="lead">I specialize in Front-End development and love building new
                and great things on projects with the latest technologies. I currently reside 
                in Southern California developing web applications.
              </p>
              <Link to='/Projects'>
                <button className="btn btn-portfolio text-light mt-5">See My Projects</button>
              </Link>
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
          <div className="row text-light project-bg-color project-container py-5">
            <div className="col-md-6">
              <ProjectScreenshot screenshot={data.screenshot} />
            </div>
            <div className="col-md-6">
              <ProjectName className="project-container-header" name={data.project} />
              <ProjectDescription description={data.description} />
              <b/>
              <TechTags tags={data.tags} />
            </div>
          </div>
        </section>
        
        <section>
          <div className="row contact-container py-5">
            <div className="col-12">
              <h2 className="m-3">Interested to work together?</h2>
              <p className="lead">I'm currently available. Don't hesitate to shoot me a contact!</p>
              <Link to='/Contact'>
                <button className="btn btn-portfolio text-light mt-5">Contact Me</button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.array.isRequired
}

export default Home;
