import PropTypes from 'prop-types';

import styles from './Section.module.scss';

function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.section}>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default Section;
