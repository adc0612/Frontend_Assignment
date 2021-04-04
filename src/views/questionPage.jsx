import React, { Component } from 'react';
import Question from '../components/question';
import styles from '../css/page.module.css';

class QuestionPage extends Component {
  render() {
    const { questionList } = this.props;
    return (
      <div className="question_wrap">
        <div className={styles.nav_header}>
          <b>학습지 상세 편집</b>
        </div>
        <ul className={styles.list}>
          {questionList.map((question, index) => (
            <Question
              key={question.id}
              question={question}
              questionIndex={index}
              onLoad={this.props.onLoad}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionPage;
