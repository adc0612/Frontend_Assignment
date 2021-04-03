import React, { Component } from 'react';
import { axiosInstance } from './api';
import './app.css';
import ReplacePage from './views/replacePage';
import SimilarQuestionInfo from './components/similarQuestionInfo';

import EditPage from './views/editPage';

class App extends Component {
  state = {
    questionList: [],
    similarQuestionList: [],
    similarQuestionStatus: false,
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

  convertStatus = () => {
    let status = false;
    this.state.questionList.forEach(function (item) {
      if (item.selected) {
        status = true;
      }
    });
    this.setState({ similarQuestionStatus: status });
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
    this.setState({ questionList }, () => this.convertStatus());
  };

  handleDelete = question => {
    const questionList = this.state.questionList.filter(
      item => item.id !== question.id,
    );
    this.setState({ questionList }, () => this.convertStatus());
  };

  render() {
    const {
      questionList,
      similarQuestionList,
      similarQuestionStatus,
    } = this.state;
    let slot;
    if (similarQuestionStatus) {
      slot = <ReplacePage questions={similarQuestionList} />;
    } else {
      slot = <SimilarQuestionInfo />;
    }
    return (
      <div className="wrap">
        <EditPage
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
