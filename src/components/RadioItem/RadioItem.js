import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './RadioItem.module.scss';
import Image from '../Image';
import { getCompactNum } from '~/utils';

const cx = classNames.bind(styles);

const RadioItem = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('thumb')}>
        <div className={cx('thumb-img')}>
          <Image src={data?.program?.thumbnail} alt="" />
          <div className={cx('overlay')}>
            <span>
              <PlayOutline fill="white" />
            </span>
          </div>
        </div>
        <span className={cx('tag')}>live</span>
        <div className={cx('avatar')}>
          <Image src={data?.host?.thumbnail} alt={data?.host?.name} />
        </div>
      </div>
      <h5 className={cx('title')}>{data?.host?.name}</h5>
      <span className={cx('listening')}>{getCompactNum(data?.activeUsers)} đang nghe</span>
    </div>
  );
};

export default RadioItem;
