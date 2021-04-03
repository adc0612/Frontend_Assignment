import React, { Component } from 'react';
import { axiosInstance } from './api';
import EditPage from './views/editPage';

class App extends Component {
  state = {
    questionList: [],
    similarQuestionList: [],
  };

  getQuestion = async () => {
    try {
      const { data } = await axiosInstance.get('problems.json');
      this.setState({
        questionList: data.data,
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
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getQuestion();
    this.getSimilarQuestion();
  }

  render() {
    const { questionList, similarQuestionList } = this.state;
    console.log(questionList);
    console.log(similarQuestionList);
    return (
      <>
        <EditPage questions={questionList} />
      </>
    );
  }
}

export default App;
