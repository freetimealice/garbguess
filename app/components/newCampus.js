import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../action-creator';

class newCampusForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addCampus({
      name: event.target.name.value,
      address: event.target.address.value,
    });
    // this.props.history.push(`/campuses/`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
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
