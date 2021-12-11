import PropTypes from 'prop-types';

import styles from './Notification.module.scss';

function Notification({ message }) {
  return <p className={styles.Notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
