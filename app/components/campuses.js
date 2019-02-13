import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, deleteCampus, requestingData } from '../actions';
import { Link } from 'react-router-dom';

class Campuses extends React.Component {
  componentDidMount() {
    this.props.requestingData();
    this.props.fetchCampuses();
  }

  clickHandler = (event, campusId) => {
    event.preventDefault();
    this.props.deleteCampus(campusId);
  };

  render() {
    const { campuses, isFetching } = this.props;
    if (!campuses.length && isFetching) {
      return <p> Loading...</p>;
    }
    return (
      <div>
        <main>
          <h1>Our Gorgeous Campuses</h1>
          <div className="card-container">
            {campuses.map(campus => (
              <div className="card" key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <img className="smallcampus-img" src={`${campus.imageUrl}`} />
                  <h3>{campus.name}</h3>
                </Link>
                <button
                  id="demolish"
                  type="submit"
                  onClick={() => this.clickHandler(event, campus.id)}
                >
                  Demolish
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
  campuses: state.campuses,
  isFetching: state.isFetching,
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
