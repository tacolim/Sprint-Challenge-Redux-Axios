import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class SmurfDelete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.updateID = this.updateID.bind(this);
  }

  deleteSmurf(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.deleteSmurf(this.state.id);
    this.setState({
      id: 0
    });
  }

  updateID(event) {
    this.setState({
      id: event.target.value
    });
  }

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.deleteSmurf}>
          <input
            type='number'
            onChange={this.updateID}
            placeholder="ID of Smurf to Delete"
            value={this.state.id}
            required
          />
          <button type="submit">Remove from the Village</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { deleteSmurf })(SmurfDelete);
