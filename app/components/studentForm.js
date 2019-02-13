import React from 'react';
import { connect } from 'react-redux';
import {
  addStudent,
  updateStudent,
} from '../actions';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      addOrUpdate: this.props.addOrUpdate,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(event) {
    this.setState({selectValue: event.target.value})
  }

  submitHandler(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const description = event.target.description.value;
    const campusId = this.state.selectValue;
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
      this.props.addStudent({ firstName, lastName, email, description, gpa, campusId });
    } else {
      console.log('campusId in update student', campusId)
      this.props.updateStudent(
        { firstName, lastName, email, description, gpa, campusId },
        studentId
      );
    }
    event.target.reset();
  }

  render() {
    const { campuses } = this.props;
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
          <label htmlFor="campus">Campus</label> <br />
          <select
            value = {this.state.selectValue}
            onChange = {this.changeHandler}>
            {campuses.map(campus => (
              <option key={campus.id} value={`${campus.id}`}>
                {campus.name}
              </option>
            ))}
          </select>
          <br />
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

const mapStateToProps = state => ({
  campuses: state.campuses,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addStudent: newStudent => {
    dispatch(addStudent(newStudent, ownProps.history));
  },
  updateStudent: (student, studentId) => {
    dispatch(updateStudent(student, studentId));
  },
  fetchCampuses: () => {
    dispatch(fetchCampuses());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
