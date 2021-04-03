import React, { Component } from 'react';
import Question from '../components/question';

class EditPage extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div className="question_wrap">
        <div>학습지 상세 편집</div>
        <ul>
          {questions.map((question, index) => (
            <Question
              key={question.id}
              question={question}
              questionIndex={index}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default EditPage;
