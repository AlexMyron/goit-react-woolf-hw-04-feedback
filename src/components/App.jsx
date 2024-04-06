import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prev => {
      return { ...prev, [name]: prev[name] + 1 };
    });
  };

  countTotalFeedback = () =>
    Object.entries(this.state).reduce((total, stat) => (total += stat[1]), 0);

  countPositiveFeedbackPercentage = total =>
    Math.round((this.state.good * 100) / total);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(total);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please, Leave a Feedback">
          <FeedbackOptions
            buttonHandler={this.onLeaveFeedback}
            options={{ good, neutral, bad }}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive || 0}
            />
          ) : (
            <Notification message="There is no feedback provided yet." />
          )}
        </Section>
      </div>
    );
  }
}

export { App };
