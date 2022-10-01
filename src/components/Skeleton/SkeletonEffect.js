import classNames from 'classnames/bind';

import styles from './Skeleton.module.scss';

const cx = classNames.bind(styles);

const SkeletonEffect = () => {
  return <div className={cx('skeleton')}></div>;
};

export default SkeletonEffect;
