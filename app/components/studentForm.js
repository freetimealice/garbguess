import React from 'react';
import { connect } from 'react-redux';
import { addStudent, updateStudent } from '../actions';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      addOrUpdate: this.props.addOrUpdate,
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const { studentId } = this.props;

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

    if (errors.length > 1) {
      this.setState({ errors });
    } else if (this.state.addOrUpdate !== 'update') {
      this.props.addStudent({ firstName, lastName, email });
    } else {
      this.props.updateStudent({ firstName, lastName, email }, studentId);
    }

    event.target.reset()
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
    dispatch(addStudent(newStudent));
  },
  updateStudent: (student, studentId) => {
    dispatch(updateStudent(student, studentId))
  }
});
export default connect(
  null,
  mapDispatchToProps
)(StudentForm);
