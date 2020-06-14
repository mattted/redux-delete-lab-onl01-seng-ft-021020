import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <React.Fragment>
        <li>
          <span>{this.props.band.name}</span> 
          <button onClick={() => this.props.delete(this.props.band.id)}>delete</button>
        </li>
      </React.Fragment>
    );
  }
};

export default Band;
