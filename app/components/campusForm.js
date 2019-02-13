import React from 'react';
import { connect } from 'react-redux';
import { addCampus, updateCampus } from '../action-creator';

class CampusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      addOrUpdate: this.props.addOrUpdate,
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const address = event.target.address.value;
    const {campusId} = this.props

    const validate = (nameField, addressField) => {
      const errorArr = [];
      if (!nameField) errorArr.push('Name cannot be blank.');
      if (!addressField) errorArr.push('Address cannot be blank.');
      console.log('error', errorArr)
      return errorArr;
    };

    const errors = validate(name, address);
    
    if (errors.length > 1) {
      this.setState({ errors });
    } else if (this.state.addOrUpdate !== 'update') {
      this.props.addCampus({ name, address });
    } else {
      this.props.updateCampus({ name, address }, campusId);
    }
    
    event.target.reset()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        {this.state.errors.map(error => (
            <p className="error" key={error}>
              ❌ {error}
            </p>
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
  updateCampus: (campus, campusId) => {
    dispatch(updateCampus(campus, campusId));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(CampusForm);
