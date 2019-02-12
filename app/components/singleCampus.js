import React from 'react';
import { connect } from 'react-redux';
import { fetchCampus, requestingData } from '../action-creator';
import { Link } from 'react-router-dom';

class SingleCampus extends React.Component {

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    this.props.requestingData()
    this.props.fetchCampus(campusId);
  }
  render() {

    const {selectedCampus, isFetching} = this.props
    const {
      name,
      imageUrl,
      address,
      description,
      students,
    } = selectedCampus;

    if (!selectedCampus.length && isFetching) {
      return <p> Loading...</p>
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
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCampus: campusId => {
    dispatch(fetchCampus(campusId));
  },
  requestingData: () => {
    dispatch(requestingData())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
