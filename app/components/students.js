import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../action-creators';
import { Link } from 'react-router-dom';

class Students extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }
  render() {
    return (
      <div>
        <main>
          <h1>Our Amazing Students</h1>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
              </tr>
              {this.props.students.map(student => (
                <tr key={student.id}>
                  <td>
                    <Link to={`students/${student.id}`}>
                      {`${student.firstName} ${student.lastName}`}
                    </Link>
                  </td>
                  <td>
                  <img src={`${student.imageUrl}`} />
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
  state,
});

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => {
    dispatch(fetchStudents());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
