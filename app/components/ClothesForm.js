import React from 'react';
import { connect } from 'react-redux';

class ClothesForm extends React.Component {

  render() {
    return (
      <div>
        <h3>Add New Clothes!</h3>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="name">Name</label>
          <br />
          <input name="name" /> <br />
          <br />
          <label htmlFor="type">Type</label>
          <br />
          <select>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
            <option value="accessory">accessory</option>
          </select>
          <br /><br />
          <label htmlFor="warmness">Warmness</label>
          <br />
          <select>
            <option value="light">light</option>
            <option value="medium">medium</option>
            <option value="heavy">heavy</option>
          </select>
          <br /><br />
          <label htmlFor="color">Color</label>
          <br />
          <select>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="purple">purple</option>
          </select>
          <br /><br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(ClothesForm);
