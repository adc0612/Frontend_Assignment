import React, { Component } from 'react';
import { axiosInstance } from './api';
import './app.css';
import SimilarQuestionPage from './views/similarQuestionPage';
import SimilarQuestionInfo from './components/similarQuestionInfo';

import QuestionPage from './views/questionPage';

class App extends Component {
  state = {
    questionList: [],
    similarQuestionList: [],
    activeQuestion: null,
  };

  getQuestion = async () => {
    try {
      const { data } = await axiosInstance.get('problems.json');
      this.setState({
        questionList: data.data,
      });
      this.state.questionList.forEach(function (item) {
        item.selected = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  getSimilarQuestion = async () => {
    try {
      const { data } = await axiosInstance.get('similars.json');
      this.setState({
        similarQuestionList: data.data,
      });
      this.state.similarQuestionList.forEach(function (item) {
        item.selected = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getQuestion();
    this.getSimilarQuestion();
  }

  setActiveQuestion = () => {
    let activeQuestion = null;
    this.state.questionList.forEach(function (item) {
      if (item.selected) {
        activeQuestion = item;
      }
    });
    this.setState({ activeQuestion });
  };

  getActiveQuestionIndex = () => {
    const questionList = this.state.questionList;
    const activeQuestion = this.state.activeQuestion;
    const index = questionList.indexOf(activeQuestion);
    return index;
  };

  handleLoad = question => {
    const questionList = this.state.questionList.map(item => {
      if (item.id === question.id) {
        const selected = question.selected;
        return { ...question, selected: !selected };
      } else {
        return { ...item, selected: false };
      }
    });
    this.setState({ questionList }, () => this.setActiveQuestion());
  };

  handleDelete = question => {
    const questionList = this.state.questionList.filter(
      item => item.id !== question.id,
    );
    this.setState({ questionList }, () => this.setActiveQuestion());
  };

  handleAdd = question => {
    const questionList = this.state.questionList;
    const similarQuestionList = this.state.similarQuestionList;
    const activeQuestionIndex = this.getActiveQuestionIndex();
    const newQuestionArr = [
      ...questionList.slice(0, activeQuestionIndex + 1),
      question,
      ...questionList.slice(activeQuestionIndex + 1, questionList.length),
    ];
    const newSimilarQuestionArr = similarQuestionList.filter(
      item => item.id !== question.id,
    );
    this.setState({ questionList: newQuestionArr });
    this.setState({ similarQuestionList: newSimilarQuestionArr });
  };

  handleReplace = (question, similarQuestionIndex) => {
    const questionList = this.state.questionList;
    const similarQuestionList = this.state.similarQuestionList;
    const activeQuestion = this.state.activeQuestion;
    const activeQuestionIndex = this.getActiveQuestionIndex();

    question.selected = true;
    const newQuestionArr = [
      ...questionList.slice(0, activeQuestionIndex),
      question,
      ...questionList.slice(activeQuestionIndex + 1, questionList.length),
    ];
    activeQuestion.selected = false;
    const newSimilarQuestionArr = [
      ...similarQuestionList.slice(0, similarQuestionIndex),
      activeQuestion,
      ...similarQuestionList.slice(
        similarQuestionIndex + 1,
        similarQuestionList.length,
      ),
    ];
    this.setState({ questionList: newQuestionArr });
    this.setState({ similarQuestionList: newSimilarQuestionArr }, () =>
      this.setActiveQuestion(),
    );
  };

  render() {
    const { questionList, similarQuestionList, activeQuestion } = this.state;
    let slot;
    if (activeQuestion) {
      slot = (
        <SimilarQuestionPage
          activeQuestion={activeQuestion}
          similarQuestionList={similarQuestionList}
          onAdd={this.handleAdd}
          onReplace={this.handleReplace}
        />
      );
    } else {
      slot = <SimilarQuestionInfo />;
    }
    return (
      <div className="wrap">
        <QuestionPage
          questionList={questionList}
          onLoad={this.handleLoad}
          onDelete={this.handleDelete}
        />
        {slot}
      </div>
    );
  }
}

export default App;
