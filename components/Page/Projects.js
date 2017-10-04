import React from 'react';
import PropTypes from 'prop-types';
import { ProjectScreenshot, ProjectName, ProjectDescription, TechTags } from '../utils';
import '../../styles/components/project.scss';

class Projects extends React.Component {
  render() {

    const renderProjects = (props) => {
      return props.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="row my-5">
              <div className="col-md-6">
                <ProjectScreenshot screenshot={item.screenshot} />
              </div>
              <div className="col-md-6">
                <ProjectName name={item.project} className="project-container-header" />
                <ProjectDescription description={item.description} />
                <TechTags tags={item.tags} />
              </div>
            </div>
            <hr/>
          </div>
        )
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 text-center mt-5">My Projects</h1>
          </div>
        </div>
        {renderProjects(this.props.data)}
      </div>
    )
  }
}

Projects.propTypes = {
  data: PropTypes.array.isRequired
}

export default Projects;
