import React, { Component } from 'react';
import SimilarQuestion from '../components/similarQuestion';

class SimilarQuestionPage extends Component {
  render() {
    const { similarQuestionList, activeQuestion } = this.props;

    return (
      <div className="question_wrap">
        <div>문항 교체 추가</div>
        <p>{activeQuestion.unitName}</p>
        <ul>
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
