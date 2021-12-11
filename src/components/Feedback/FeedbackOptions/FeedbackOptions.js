import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.options}>
      {options.map((optionItem, index) => (
        <button
          type="button"
          className={[styles.button, styles[optionItem]].join(' ')}
          key={optionItem}
          onClick={() => onLeaveFeedback(index)}
        >
          {optionItem}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
