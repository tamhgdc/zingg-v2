import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const PopperWrapper = ({ children, className }) => {
  const classes = {
    [className]: className,
  };
  return (
    <div className={cx('wrapper', classes)}>
      <div className={cx('inner')}>{children}</div>
    </div>
  );
};

PopperWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopperWrapper;
