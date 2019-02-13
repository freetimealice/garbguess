import React from 'react';
import { connect } from 'react-redux';
import { fetchStudent, requestingData } from '../actions';
import { Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import NotExist from './NotExist';

class SingleStudent extends React.Component {
  componentDidMount() {
    const { studentId } = this.props.match.params;
    this.props.requestingData();
    this.props.fetchStudent(studentId);
  }

  render() {
    const { selectedStudent, isFetching } = this.props;
    const { studentId } = this.props.match.params;

    if (selectedStudent === null) {
      return <NotExist campusOrStudent="Student" />;
    }

    const {
      firstName,
      lastName,
      imageUrl,
      email,
      gpa,
      campus,
      description,
    } = selectedStudent;

    if (!selectedStudent.length && isFetching) {
      return <p> Loading...</p>;
    }

    return (
      <div>
        <main>
          <h1>
            Student: {firstName} {lastName}
          </h1>
          <div className="profile-container">
            <div className="profile-details">
              <img className="largeprofile-img" src={`${imageUrl}`} />
            </div>
            <div className="profile-details">
              <p>
                <b>First Name: </b>
                {firstName}
              </p>
              <p>
                <b>Last Name: </b>
                {lastName}
              </p>
              <p>
                <b>Email:</b> {email}
              </p>
              <p>
                <b>GPA: </b>
                {gpa}
              </p>
              <p>
                <b>Campus: </b>
                {campus ? (
                  <Link to={`/campuses/${campus.id}`}> {campus.name} </Link>
                ) : (
                  'Not Currently Enrolled'
                )}
              </p>
              <p>
                <b>Description: </b>
                {description}
              </p>
            </div>
          </div>
          <div className="profile-details">
            <h3> Edit Student </h3>
            <StudentForm addOrUpdate="update" studentId={studentId} />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedStudent: state.selectedStudent,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchStudent: studentId => {
    dispatch(fetchStudent(studentId));
  },
  requestingData: () => {
    dispatch(requestingData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
