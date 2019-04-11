import React from 'react';
import { connect } from 'react-redux';
import { fetchClothes} from '../actions';
import ClothesForm from './ClothesForm'

class Clothes extends React.Component {
  componentDidMount() {
    this.props.fetchClothes();
  }

  render() {
    const { clothes } = this.props;
    return (
      <div>
        <main>
          <h1>Your Beautiful Clothes</h1>
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Warmness</th>
              <th>Color</th>
            </tr>
            {clothes.map(clothing => (
              <tr key = {clothing.id}>
              <td><img width = "100" src = {clothing.imageUrl} /></td>
              <td>{clothing.name}</td>
              <td>{clothing.type}</td>
              <td>{clothing.warmness}</td>
              <td>{clothing.color}</td>
              </tr>
            ))}
          </table>
        </main>
        <ClothesForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clothes: state.clothes,
});

const mapDispatchToProps = dispatch => ({
  fetchClothes: () => {
    console.log('fetching')
    dispatch(fetchClothes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clothes);
