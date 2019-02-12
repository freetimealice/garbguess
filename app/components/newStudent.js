import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../action-creator';

class newStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
      event.preventDefault();
      this.props.addStudent({
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value
        });
    // this.props.history.push(`/students/`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
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

const mapStateToProps = state => ({
    students: state.students
})

const mapDispatchToProps = dispatch => ({
  addStudent: newStudent => {
    dispatch(addStudent(newStudent));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newStudentForm);
