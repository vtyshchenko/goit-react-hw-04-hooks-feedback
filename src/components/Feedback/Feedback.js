import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Thanks from './Thanks';

import styles from './Feedback.module.scss';

const options = ['Good', 'Neutral', 'Bad'];

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const count = countTotalFeedback();
    return count > 0 ? ((good * 100) / count).toFixed(2) : 0;
  }

  function onLeaveFeedback(idx) {
    switch (options[idx]) {
      case 'Good':
        setGood(state => state + 1);
        window['message'] = 'Thanks for your feedback. We are waiting for you again soon)))';
        break;
      case 'Neutral':
        setNeutral(state => state + 1);
        window['message'] = 'Thanks for your feedback. We will work on ourselves';
        break;
      case 'Bad':
        setBad(state => state + 1);
        window['message'] =
          'Thanks for your feedback. Sorry to keep you unhappy. We will work on ourselves so that does not happen again';
        break;

      default:
        break;
    }
  }

  const countTotal = countTotalFeedback();

  return (
    <div className={styles.componenet}>
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        {countTotal ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback (((" />
        )}
      </div>

      {countTotal && <Thanks message={window['message']} />}
    </div>
  );
}

export default Feedback;
