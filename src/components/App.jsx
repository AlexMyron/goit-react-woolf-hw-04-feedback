import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    setFeedbackState(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = () =>
    Object.entries(feedbackState).reduce((total, stat) => (total += stat[1]), 0);

  const countPositiveFeedbackPercentage = total =>
    Math.round((feedbackState.good * 100) / total);

  const { good, neutral, bad } = feedbackState;
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage(total);
  
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
          buttonHandler={onLeaveFeedback}
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
};

export { App };
