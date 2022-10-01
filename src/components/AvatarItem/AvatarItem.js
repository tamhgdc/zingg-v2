import classNames from 'classnames/bind';

import styles from './AvatarItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const AvatarItem = ({ img, small }) => {
  const classes = {
    small,
  };
  return (
    <div className={cx('wrapper', { ...classes })}>
      <Image src={img} alt="" />
    </div>
  );
};

export default AvatarItem;
