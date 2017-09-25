import React from 'react';

class Projects extends React.Component {
  render() {

    const renderProjects = (props) => {
      return props.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="row my-5">
              <div className="col-md-6">
                <img className="img-thumbnail" width="500" height="500" src={item.screenshot} />
              </div>
              <div className="col-md-6">
                <h2 className="mt-4">{item.website}</h2>
                <p>{item.description}</p>
                <i className="fa fa-circle icon-fonts-circle mr-2" aria-hidden="true"></i>
                {item.tags.map((tag) => <span className="badge badge-dark mr-1">{tag}</span>)}
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

export default Projects;
