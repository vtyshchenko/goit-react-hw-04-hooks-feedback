import PropTypes from 'prop-types';

import styles from './Thanks.module.scss';

function Thanks({ message }) {
  return (
    <div>
      <p className={styles.text}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Thanks;
