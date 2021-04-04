import React, { Component } from 'react';
import Question from '../components/question';

class QuestionPage extends Component {
  // handleLoad = (question, questionIndex) => {
  //   // this.props.onLoad(this.props.question);
  //   console.log(`${question.id}`);
  //   console.log(`${questionIndex}`);
  // };

  render() {
    const { questionList } = this.props;
    return (
      <>
        <div className="question_wrap">
          <div>학습지 상세 편집</div>
          <ul>
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
      </>
    );
  }
}

export default QuestionPage;
