import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents } from '../reducers';

// const Root = () => {

//   return (
//     <div>
//       <nav>
//         Welcome!
//       </nav>
//       <main>
//         <h1>Welcome to Juuban Municipal High School of Magic!</h1>
//         <p>Where scouts are saving the world everyday!</p>
//         <p>This seems like a nice place to get started with some Routes!</p>
//       </main>
//     </div>
//   )
// }

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }
  render() {
    return (
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to Juuban Municipal High School of Magic!</h1>
          <p>Where scouts are saving the world everyday!</p>
          <p>This seems like a nice place to get started with some Routes!</p>
          <table>
            <tbody>
            <tr>
              <td>Name</td>
              <td>Image</td>
            </tr>
            {this.props.campuses.map(
              campus =>
              (<tr key = {campus.id}>
                <td>{campus.name}</td>
                <td><img src = {`${campus.imageUrl}`} /></td>
               </tr>)
              )}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campuses: state.campuses,
  students: state.students,
});

const mapDispatchToProps = dispatch => ({
  fetchCampuses: () => {dispatch(fetchCampuses())},
  fetchStudents: () => {dispatch(fetchStudents())},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
