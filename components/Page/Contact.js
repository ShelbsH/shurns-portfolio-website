import React from 'react';
import Form from '../Form';
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
        <Form />
      </div>
    )
  }
}

export default Contact;
