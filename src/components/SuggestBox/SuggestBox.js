import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestBox.module.scss';

const cx = classNames.bind(styles);

const SuggestBox = ({ title, titleBtn, gradient, className = '', onClick = () => {} }) => {
  const props = {
    gradient,
  };
  return (
    <div className={cx('wrapper', { [className]: className, ...props })}>
      <p className={cx('title')}>{title}</p>
      <button onClick={onClick} className={cx('btn')}>
        {titleBtn}
      </button>
    </div>
  );
};

SuggestBox.propTypes = {
  title: PropTypes.string.isRequired,
  titleBtn: PropTypes.string.isRequired,
  gradient: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default SuggestBox;
