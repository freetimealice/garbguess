import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers';

class Students extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }
  render() {
    return (
      <div>
        <main>
          <h1>Our Campus</h1>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
              </tr>
              {this.props.Students.map(student => (
                <tr key={student.id}>
                  <td>{`${student.firstName} ${student.lastName}`}</td>
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
  Students: state.students,
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
