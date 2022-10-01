import classNames from 'classnames/bind';

import styles from './CategoryItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const CategoryItem = ({ data, type, center }) => {
  const classes = {
    center,
  };
  return (
    <div className={cx('wrapper', { ...classes })}>
      <Image src={data?.thumbnail} alt={data.title} />
      <div className={cx('body')}>
        <h3 className={cx('title')}>{data?.title}</h3>
        {type === 'activity' && (
          <div className={cx('container')}>
            {data?.playlists?.map((item) => (
              <div key={item.encodeId} className={cx('item')}>
                <Image src={item?.thumbnailM} alt={item?.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
