import React from 'react';
import { connect } from 'react-redux';
import { addCampus, updateCampus } from '../actions';

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
    const description = event.target.description.value;
    const { campusId } = this.props;

    const validate = (nameField, addressField) => {
      const errorArr = [];
      if (!nameField) errorArr.push('Name cannot be blank.');
      if (!addressField) errorArr.push('Address cannot be blank.');
      return errorArr;
    };

    const errors = validate(name, address);

    if (errors.length > 0) {
      this.setState({ errors });
    } else if (this.state.addOrUpdate !== 'update') {
      this.props.addCampus({ name, address, description });
    } else {
      this.props.updateCampus(
        { name, address, description},
        campusId
      );
    }
    event.target.reset();
  }

  render() {
    return (
      <div>
        {this.state.addOrUpdate !== 'update' ? (
          <h1>Construct a New Campus!</h1>
        ) : (
          <p />
        )}
        <form onSubmit={this.submitHandler}>
          {this.state.errors.map(error => (
            <p className="error" key={error}>
              ❌ {error}
            </p>
          ))}
          <label htmlFor="name">Name</label>
          <br />
          <input name="name" /> <br />
          <label htmlFor="address">Address</label>
          <br />
          <input name="address" /> <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea name="description" /> <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addCampus: newCampus => {
    dispatch(addCampus(newCampus, ownProps.history));
  },
  updateCampus: (campus, campusId) => {
    dispatch(updateCampus(campus, campusId));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(CampusForm);
