import PropTypes from 'prop-types';

import styles from './Statistisc.module.scss';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.stat}>
      <p className={styles.item}>
        Good: <span className={styles.good}>{good}</span>
      </p>
      <p className={styles.item}>
        Neutral: <span className={styles.neutral}>{neutral}</span>
      </p>
      <p className={styles.item}>
        Bad: <span className={styles.bad}>{bad}</span>
      </p>
      <p className={styles.itemTotal}>
        Total: <span className={styles.total}>{total}</span>
      </p>

      <p className={styles.percent}>Positive feedback: {positivePercentage} %</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
