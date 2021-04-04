import React, { Component } from 'react';
import styles from '../css/question.module.css';

class Question extends Component {
  handleLoad = () => {
    this.props.onLoad(this.props.question);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.question);
  };

  render() {
    const { problemType, unitName, problemURL, selected } = this.props.question;
    const questionIndex = this.props.questionIndex + 1;
    return (
      <li className={styles.list_item}>
        <div className={styles.list_header}>
          <div className={styles.list_text_wrap}>
            <b>{problemType}</b>
            <span>{unitName}</span>
          </div>
          <div className={styles.list_button_wrap}>
            <button
              onClick={this.handleLoad}
              className={selected ? styles['clicked'] : styles['list_button']}
            >
              유사문항
            </button>
            <button onClick={this.handleDelete} className={styles.list_button}>
              삭제
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

export default Question;
