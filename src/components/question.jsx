import React, { Component } from 'react';

class Question extends Component {
  render() {
    const { problemType, unitName, problemURL } = this.props.question;
    return (
      <li>
        <div>
          <span>{problemType}</span>
          <span>{unitName}</span>
          <button className="product-button product-decrease">유사문항</button>
          <button className="product-button product-decrease">삭제</button>
        </div>
        <div>
          <img src={problemURL} alt="" />
        </div>
      </li>
    );
  }
}

export default Question;
