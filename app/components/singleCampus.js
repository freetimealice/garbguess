import React from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../action-creator';
import { Link } from 'react-router-dom';

class SingleCampus extends React.Component {
  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    this.props.fetchCampus(campusId);
  }
  render() {
    const {
      name,
      imageUrl,
      address,
      description,
      students,
    } = this.props.selectedCampus;
    return (
      <div>
        <main>
          <h1>Our Campus</h1>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <img src={`${imageUrl}`} />
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{address}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{description}</td>
              </tr>
              <tr>
                <td>Students</td>
                <td>
                  <ul>
                    {students ? (
                      students.map(student => (
                        <li key={student.id}>
                          <Link to={`/students/${student.id}`}>
                            {student.firstName}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>not hi</li>
                    )}
                  </ul>
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
  selectedCampus: state.selectedCampus,
});

const mapDispatchToProps = dispatch => ({
  fetchCampus: campusId => {
    dispatch(fetchCampus(campusId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
