import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Thanks from './Thanks';

import styles from './Feedback.module.scss';

const options = ['Good', 'Neutral', 'Bad'];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const count = this.countTotalFeedback();
    return count > 0 ? ((good * 100) / this.countTotalFeedback()).toFixed(2) : 0;
  }

  onLeaveFeedback = idx => {
    switch (options[idx]) {
      case 'Good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        this.message = 'Thanks for your feedback. We are waiting for you again soon)))';
        break;
      case 'Neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        this.message = 'Thanks for your feedback. We will work on ourselves';
        break;
      case 'Bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        this.message =
          'Thanks for your feedback. Sorry to keep you unhappy. We will work on ourselves so that does not happen again';
        break;

      default:
        break;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotal = this.countTotalFeedback();

    return (
      <div className={styles.componenet}>
        <div className={styles.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
          </Section>
          {countTotal ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotal}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback (((" />
          )}
        </div>

        {countTotal && <Thanks message={this.message} />}
      </div>
    );
  }
}

export default Feedback;
