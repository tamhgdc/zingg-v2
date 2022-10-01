import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ArtistLink.module.scss';

const cx = classNames.bind(styles);

const ArtistLink = ({ to = '', children, className, ...props }) => {
  const classes = {
    ...className,
  };

  return (
    <Link to={to} {...props} className={cx('artist-link', { ...classes })}>
      {children}
    </Link>
  );
};

export default ArtistLink;
