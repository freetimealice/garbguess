import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../action-creator';

class newCampusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;

    const validate = (nameField, addressField) => {
      const errorArr = [];
      if (!nameField) errorArr.push('Name cannott be blank.');
      if (!addressField) errorArr.push('Address cannot be blank.');
      return errorArr;
    };
    const errors = validate(name, address);

    errors.length > 1
      ? this.setState({errors})
      : this.props.addCampus({ name, address });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {this.state.errors.map(error => (
            <p className = "error" key={error}> ❌ {error}</p>
          ))}
          <label htmlFor="name">Name</label>
          <input name="name" /> <br />
          <label htmlFor="address">Address</label>
          <input name="address" />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCampus: newCampus => {
    dispatch(addCampus(newCampus));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(newCampusForm);
