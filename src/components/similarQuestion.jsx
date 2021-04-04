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
    const { problemType, unitName, problemURL } = this.props.question;
    const questionIndex = this.props.questionIndex + 1;
    return (
      <li className={styles.list_item}>
        <div className={styles.list_header}>
          <div className={styles.list_text_wrap}>
            <b>{problemType}</b>
            <span>{unitName}</span>
          </div>
          <div className={styles.list_button_wrap}>
            <button onClick={this.handleAdd} className={styles.list_button}>
              추가
            </button>
            <button onClick={this.handleReplace} className={styles.list_button}>
              교체
            </button>
          </div>
        </div>
        <div className={styles.list_content}>
          <span>{questionIndex}</span>
          <img src={problemURL} alt="" />
        </div>
      </li>
    );
  }
}

export default SimilarQuestion;
