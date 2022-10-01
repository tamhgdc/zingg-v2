import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './GlobalStyles.module.scss';

const cx = classNames.bind(styles);

const GlobalStyles = ({ children }) => {
  return <div className={cx('wrapper')}>{children}</div>;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
