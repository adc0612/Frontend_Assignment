import React, { Component } from 'react';
import SimilarQuestion from '../components/similarQuestion';
import styles from '../css/page.module.css';

class SimilarQuestionPage extends Component {
  render() {
    const { similarQuestionList, activeQuestion } = this.props;
    return (
      <div className="question_wrap right">
        <div className={styles.nav_header}>
          <b>문항 교체 추가</b>
        </div>
        <p className={styles.nav_text}>{activeQuestion.unitName}</p>
        <ul className={styles.list}>
          {similarQuestionList.map((question, index) => (
            <SimilarQuestion
              key={question.id}
              question={question}
              questionIndex={index}
              onAdd={this.props.onAdd}
              onReplace={this.props.onReplace}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SimilarQuestionPage;
