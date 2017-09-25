import React from 'react';
import classNames from 'classnames';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      isFirstNameError: false,
      isLastNameError: false,
      isEmailError: false,
      isDescriptionError: false
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler({target}) {
    this.setState({
      [target.name]: target.value
    })
  }

  onSubmitHandler(e) {
    e.preventDefault();

    let isError = false;
    const nameRegex = /^[a-z]+$/i;
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const { firstName, lastName, email, description } = this.state;

    const errors = {
      isFirstNameError: false,
      isLastNameError: false,
      isEmailError: false,
      isDescriptionError: false
    }

    if (!nameRegex.test(firstName.trim())) {
      isError = true;
      errors.isFirstNameError = true;
    }

    if (!nameRegex.test(lastName.trim())) {
      isError = true;
      errors.isLastNameError = true;
    }

    if (!emailRegex.test(email.trim())) {
      isError = true;
      errors.isEmailError = true;
    }

    if(!description.length) {
      isError = true;
      errors.isDescriptionError = true;
    }

    this.setState({
      ...this.state,
      ...errors
    });

    if (isError) {
      return false;
    }
  }

  render() {

    const labelClass = 'col-form-label form-label';
    const inputClass = 'form-control form-control-lg input-text';
    const textAreaClass = 'form-control form-control-lg textArea-size input-text';
    
    const { isFirstNameError, isLastNameError, isEmailError, isDescriptionError } = this.state;

    const formClass = (defaultClass, errorClassName, isErrorState) => {
      return classNames({
        [defaultClass]: true,
        [errorClassName]: isErrorState ? true : false
      });
    }

    return (
      <form className="mt-3" onSubmit={this.onSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label
              className={formClass(labelClass, 'label-error', isFirstNameError)}
              htmlFor="firstName">First Name*</label>
            <input
              className={formClass(inputClass, 'input-error', isFirstNameError)}
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChangeHandler}/>
          </div>
          <div className="form-group col-md-6">
            <label
              className={formClass(labelClass, 'label-error', isLastNameError)}
              htmlFor="lastName">Last Name*</label>
            <input
              className={formClass(inputClass, 'input-error', isLastNameError)}
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChangeHandler}/>
          </div>
        </div>

        <div className="form-group">
          <label 
            className={formClass(labelClass, 'label-error', isEmailError)} 
            htmlFor="email">Email Address*</label>
          <input
            className={formClass(inputClass, 'input-error', isEmailError)}
            type="text"
            placeholder="Enter your email here"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}/>
        </div>

        <div className="form-group">
          <label htmlFor="organization" className="col-form-label form-label">Organization (optional)</label>
          <input
            className="form-control form-control-lg input-text"
            name="organization"
            placeholder="Enter the name of your organization"/>
        </div>

        <div className="form-group">
          <label 
            className={formClass(labelClass, 'label-error', isDescriptionError)}  
            htmlFor="description">Enter a description about your project or any other questions you have for me here*
          </label>
          <textarea
            className={formClass(textAreaClass, 'textArea-error', isDescriptionError)}
            name="description"
            value={this.state.description}
            onChange={this.onChangeHandler}></textarea>
        </div>

        <button className="btn btn-lg form-btn-portfolio" type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
