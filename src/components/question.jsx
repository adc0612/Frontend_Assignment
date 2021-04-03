import React, { Component } from 'react';
import styles from '../css/question.module.css';

class Question extends Component {
  handleLoad = () => {
    this.props.onLoad(this.props.question);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.question);
    console.log(`delete`);
  };

  render() {
    const { problemType, unitName, problemURL, selected } = this.props.question;
    const questionIndex = this.props.questionIndex + 1;
    return (
      <li className={styles.listItem}>
        <div>
          <span>{problemType}</span>
          <span>{unitName}</span>
          <button
            onClick={this.handleLoad}
            className={selected ? styles['clicked'] : ''}
          >
            유사문항
          </button>
          <button onClick={this.handleDelete}>삭제</button>
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

export default Question;
