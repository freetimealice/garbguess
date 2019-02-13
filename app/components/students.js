import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents, deleteStudent, requestingData } from '../actions';
import { Link } from 'react-router-dom';

class Students extends React.Component {
  componentDidMount() {
    this.props.requestingData();
    this.props.fetchStudents();
  }

  clickHandler = (event, studentId) => {
    event.preventDefault();
    this.props.deleteStudent(studentId);
  };

  render() {
    const { students, isFetching } = this.props;
    if (!students.length && isFetching) {
      return <p> Loading...</p>;
    }
    return (
      <div>
        <main>
          <h1>Our Amazing Students</h1>
          <div className="card-container">
            {students.map(student => (
              <div className="card" key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <img
                    className="smallprofile-img"
                    src={`${student.imageUrl}`}
                  />
                  <h3>{`${student.firstName} ${student.lastName}`}</h3>
                </Link>
                <button
                  id="demolish"
                  type="submit"
                  onClick={() => this.clickHandler(event, student.id)}
                >
                  Expel
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => {
    dispatch(fetchStudents());
  },
  deleteStudent: studentId => {
    dispatch(deleteStudent(studentId));
  },
  requestingData: () => {
    dispatch(requestingData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
