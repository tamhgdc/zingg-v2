import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      children,
      primary = false,
      secondary = false,
      small = false,
      large = false,
      outline = false,
      solid = false,
      rounded = false,
      circled = false,
      squared = false,
      transparent = false,
      offset,
      fontSmall,
      className,
      onClick,
      size,
      center,
      ...props
    },
    ref
  ) => {
    const methods = {
      onClick,
      ...props,
    };

    const classes = cx('wrapper', {
      primary,
      secondary,
      rounded,
      circled,
      squared,
      small,
      large,
      outline,
      solid,
      fontSmall,
      transparent,
      center,
      [className]: className,
      [offset]: offset,
    });

    return (
      <button
        ref={ref}
        className={classes}
        {...methods}
        style={size ? { width: size, height: size } : {}}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  outline: PropTypes.bool,
  solid: PropTypes.bool,
  rounded: PropTypes.bool,
  squared: PropTypes.bool,
  circled: PropTypes.bool,
  transparent: PropTypes.bool,
  offset: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  props: PropTypes.any,
};

export default Button;
