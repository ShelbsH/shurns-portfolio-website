import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form className="mt-5">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="col-form-label form-label" htmlFor="firstName">First Name*</label>
            <input
              className="form-control form-control-lg input-text"
              type="text"
              placeholder="Enter your first name"
              id="firstName"/>
          </div>
          <div className="form-group col-md-6">
            <label className="col-form-label form-label" htmlFor="lastName">Last Name*</label>
            <input
              className="form-control form-control-lg input-text"
              type="text"
              placeholder="Enter your last name"
              id="lastName"/>
          </div>
        </div>

        <div className="form-group">
          <label className="col-form-label form-label" htmlFor="email">Email Address*</label>
          <input
            className="form-control form-control-lg input-text"
            type="email"
            id="email"
            placeholder="Enter your email here"/>
        </div>

        <div className="form-group">
          <label htmlFor="organization" className="col-form-label form-label">Organization (optional)</label>
          <input
            className="form-control form-control-lg input-text"
            id="organization"
            placeholder="Enter the name of your organization"/>
        </div>

        <div className="form-group">
          <label className="col-form-label form-label" htmlFor="description">Enter a
            description about your project or any other questions you have for me here*</label>
          <textarea
            className="form-control form-control-lg textArea-size input-text"
            id="description"></textarea>
        </div>

        <button className="btn btn-lg form-btn-portfolio" type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;