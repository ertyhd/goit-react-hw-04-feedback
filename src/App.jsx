import React, { Component } from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import Section from './components/Section/Section';
import Statistics from 'components/Statistics/Statistics';

// import './App.css';

const options = ['good', 'bad', 'neutral'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  // handleFeedback = ({ target }) => {
  //   const { feedback } = target.dataset;
  //   this.setState(prevState => {
  //     return { [feedback]: prevState[feedback] + 1 };
  //   });
  // };

  handleFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <MainMenu options={options} actionFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positiveFeedbackPercentage={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}

export default App;
