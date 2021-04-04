import React, { Component } from 'react';
import styles from '../css/page.module.css';

class SimilarQuestionInfo extends Component {
  render() {
    return (
      <div className="question_wrap right">
        <div className={styles.nav_header}>
          <b>문항 교체 추가</b>
        </div>
        <div className={styles.content_wrap}>
          <p className={styles.content_text}>
            <span>유사문항</span> 버튼을 누르면
            <br />
            해당 문제의 유사 문항을 볼 수 있습니다.
          </p>
        </div>
      </div>
    );
  }
}

export default SimilarQuestionInfo;
