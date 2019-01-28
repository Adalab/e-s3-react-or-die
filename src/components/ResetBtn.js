import React, { Component } from 'react';


class ResetBtn extends Component {
  render() {
    const resetButton = (
      <div className="section__card-button">
        <button className="reset" onClick={this.props.handleReset}><i className="far fa-trash-alt icon-reset"></i>Reset</button>
      </div>
    );
    return resetButton;
  }
}
export default ResetBtn;