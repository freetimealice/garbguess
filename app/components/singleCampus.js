import React from 'react';
import { connect } from 'react-redux';
import { fetchCampus, requestingData } from '../actions';
import { Link } from 'react-router-dom';
import CampusForm from './campusForm';

class SingleCampus extends React.Component {
  componentDidMount() {
    const { campusId } = this.props.match.params;
    this.props.requestingData();
    this.props.fetchCampus(campusId);
  }

  render() {
    const { selectedCampus, isFetching } = this.props;
    const { campusId } = this.props.match.params;
    const { name, imageUrl, address, description, students } = selectedCampus;

    if (!selectedCampus.length && isFetching) {
      return <p> Loading...</p>;
    }
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
                      <li />
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <CampusForm addOrUpdate="update" campusId={campusId} />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedCampus: state.selectedCampus,
  isFetching: state.isFetching,
  campuses: state.campuses,
});

const mapDispatchToProps = dispatch => ({
  fetchCampus: campusId => {
    dispatch(fetchCampus(campusId));
  },
  requestingData: () => {
    dispatch(requestingData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
