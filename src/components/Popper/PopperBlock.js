import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const PopperBlock = ({ children }) => {
  return <div className={cx('block')}>{children}</div>;
};

PopperBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopperBlock;
