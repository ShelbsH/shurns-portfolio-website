import React from 'react';

class Projects extends React.Component {
  render() {

    const renderProjects = ( props ) => {
      return props.map((item, idx) => {
        return (
          <div className="row mt-5" key={idx}>
            <div className="col-md-6">
              <h2>Background images goes here...</h2>
            </div>
            <div className="col-md-6">
              <h2 className="mt-4">{item.website}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        )
      }); 
    }
    
    return (
      <div className="container-fluid">
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

export default Projects;
