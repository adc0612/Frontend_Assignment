import React, { Component } from 'react';
import Question from '../components/question';

class EditPage extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div>
        <div>학습지 상세 편집</div>
        <ul>
          {questions.map(question => (
            <Question key={question.id} question={question} />
          ))}
        </ul>
      </div>
    );
  }
}

export default EditPage;
