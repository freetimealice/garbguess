import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../action-creator';

class newStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;

    const validate = (firstNameField, lastNameField, emailField) => {
      const errorArr = [];
      if (!firstNameField) errorArr.push('First name cannot be blank.');
      if (!lastNameField) errorArr.push('Last name cannot be blank.');
      if (!emailField) errorArr.push('Email cannot be blank.');
      if (!emailField.includes('.') || !email.includes('@')) {
        errorArr.push(`Email should contain a "@" and "."`);
      }
      return errorArr;
    };

    const errors = validate(firstName, lastName, email);
    
    errors.length > 1
      ? this.setState({ errors })
      : this.props.addStudent({
          firstName,
          lastName,
          email,
        });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {this.state.errors.map(error => (
            <p className="error" key={error}>
              ❌ {error}
            </p>
          ))}
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" /> <br />
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" /> <br />
          <label htmlFor="email">Email</label>
          <input name="email" /> <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addStudent: newStudent => {
    console.log('im in dispatch')
    dispatch(addStudent(newStudent))
  },
});
export default connect(
  null,
  mapDispatchToProps
)(newStudentForm);
