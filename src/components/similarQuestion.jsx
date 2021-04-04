import React, { Component } from 'react';
import styles from '../css/question.module.css';

class SimilarQuestion extends Component {
  handleAdd = () => {
    this.props.onAdd(this.props.question);
  };

  handleReplace = () => {
    this.props.onReplace(this.props.question, this.props.questionIndex);
  };

  render() {
    const { problemType, unitName, problemURL, selected } = this.props.question;
    const questionIndex = this.props.questionIndex + 1;
    return (
      <li className={styles.listItem}>
        <div>
          <span>{problemType}</span>
          <span>{unitName}</span>
          <button onClick={this.handleAdd}>추가</button>
          <button onClick={this.handleReplace}>교체</button>
        </div>
        <div>
          <span>{questionIndex}</span>
          <img src={problemURL} alt="" />
          <span>{selected}</span>
        </div>
      </li>
    );
  }
}

export default SimilarQuestion;
