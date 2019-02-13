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
    const description = event.target.description.value;
    const gpa = Number(event.target.gpa.value).toFixed(1);
    const { studentId } = this.props;

    const validate = (firstNameField, lastNameField, emailField, gpaField) => {
      const errorArr = [];
      if (!firstNameField) errorArr.push('First name cannot be blank.');
      if (!lastNameField) errorArr.push('Last name cannot be blank.');
      if (!emailField) errorArr.push('Email cannot be blank.');
      if (gpaField < 0 || gpa > 4) errorArr.push('GPA must be a number between 0.0 and 4.0');
      if (!emailField.includes('.') || !email.includes('@')) {
        errorArr.push(`Email should contain a "@" and "."`);
      }
      return errorArr;
    };

    const errors = validate(firstName, lastName, email, gpa);

    if (errors.length > 0) {
      this.setState({ errors });
    } else if (this.state.addOrUpdate !== 'update') {
      this.props.addStudent({ firstName, lastName, email, description, gpa });
    } else {
      this.props.updateStudent({ firstName, lastName, email, description, gpa }, studentId);
    }
    event.target.reset();
  }

  render() {
    return (
      <div>
        {this.state.addOrUpdate !== 'update' ? <h1>Enroll Now!</h1> : <p />}
        <form onSubmit={this.submitHandler}>
          {this.state.errors.map(error => (
            <p className="error" key={error}>
              ❌ {error}
            </p>
          ))}
          <label htmlFor="firstName">First Name</label> <br />
          <input name="firstName" /> <br />
          <label htmlFor="lastName">Last Name</label> <br />
          <input name="lastName" /> <br />
          <label htmlFor="email">Email</label> <br />
          <input name="email" /> <br />
          <label htmlFor="gpa">GPA</label> <br />
          <input name="gpa" /> <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea name="description" /> <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addStudent: newStudent => {
    dispatch(addStudent(newStudent, ownProps.history));
  },
  updateStudent: (student, studentId) => {
    dispatch(updateStudent(student, studentId));
  },
});
export default connect(
  null,
  mapDispatchToProps
)(StudentForm);
