import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, deleteCampus, requestingData} from '../action-creator';
import { Link } from 'react-router-dom';

class Campuses extends React.Component {

  componentDidMount() {
    this.props.requestingData()
    this.props.fetchCampuses();
  }

  clickHandler = (event, campusId) => {
    event.preventDefault();
    this.props.deleteCampus(campusId);
  };

  render() {
    const {campuses, isFetching} = this.props
    if (!campuses.length && isFetching) {
      return <p> Loading...</p>
    }
    return (
      <div>
        <main>
          <h1>Our Gorgeous Campuses</h1>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Image</td>
              </tr>
              {campuses.map(campus => (
                <tr key={campus.id}>
                  <td>
                    <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                  </td>
                  <td>
                    <img src={`${campus.imageUrl}`} />
                  </td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => this.clickHandler(event, campus.id)}
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
  campuses: state.campuses,
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCampuses: () => {
    dispatch(fetchCampuses());
  },
  deleteCampus: campusId => {
    dispatch(deleteCampus(campusId));
  },
  requestingData: () => {
    dispatch(requestingData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
