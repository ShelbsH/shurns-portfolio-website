import React from 'react';
import '../../styles/components/contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5 text-center text-color">
          <div className="col-12">
            <h1 className="display-3">Contact Form</h1>
            <p className="lead">Interested in discussing a project or have any questions?</p>
            <p className="lead">Enter the form below and I'll get back with you ASAP!</p>
          </div>
        </div>

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
      </div>
    )
  }
}

export default Contact;
