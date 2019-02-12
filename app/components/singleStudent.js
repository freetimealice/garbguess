import React from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from '../action-creator';
import { Link } from 'react-router-dom';

class SingleStudent extends React.Component {
  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    this.props.fetchStudent(studentId);
  }
  render() {
    const {
      firstName,
      lastName,
      imageUrl,
      email,
      gpa,
      campus,
    } = this.props.selectedStudent;
    return (
      <div>
        <main>
          <h1>Our Student</h1>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{lastName}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <img src={`${imageUrl}`} />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>GPA</td>
                <td>{gpa}</td>
              </tr>
              <tr>
                <td>Campus</td>
                <td>
                  {campus ? (
                    <Link to={`/campuses/${campus.id}`}> {campus.name} </Link>
                  ) : (
                    'Not Currently Enrolled'
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedStudent: state.selectedStudent,
});

const mapDispatchToProps = dispatch => ({
  fetchStudent: studentId => {
    dispatch(fetchStudent(studentId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
