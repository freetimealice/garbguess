import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../action-creators';
import { Link } from 'react-router-dom';
class Campuses extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }
  render() {
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
              {this.props.campuses.map(campus => (
                  <tr key={campus.id} >
                  <td>
                  <Link to={`/campuses/${campus.id}`}>
                  {campus.name}
                  </Link>
                  </td>
                    <td>
                      <img src={`${campus.imageUrl}`} />
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
});

const mapDispatchToProps = dispatch => ({
  fetchCampuses: () => {
    dispatch(fetchCampuses());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
