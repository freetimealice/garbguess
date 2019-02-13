import React from 'react';
import { connect } from 'react-redux';
import {
  fetchStudents,
  deleteStudent,
  requestingData,
} from '../action-creator';
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
          <table>
            <tbody>
              <tr>
                <td>Name</td>
              </tr>
              {students.map(student => (
                <tr key={student.id}>
                  <td>
                    <Link to={`/students/${student.id}`}>
                      {`${student.firstName} ${student.lastName}`}
                    </Link>
                  </td>
                  <td>
                    <img src={`${student.imageUrl}`} />
                  </td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => this.clickHandler(event, student.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
