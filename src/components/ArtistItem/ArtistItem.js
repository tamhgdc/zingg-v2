import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ArtistItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const ArtistItem = ({ data }) => {
  return (
    <Link to={`/album/${data.encodeId}`} className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Image src={data.thumbnail} alt={data.artistsNames} className={cx('thumbnail')} />
        <div className={cx('body')}>
          <h3 className={cx('name')}>{data.artistsNames}</h3>
          <div className={cx('songs')}>
            {data.song.items
              .filter((item, index) => index < 3)
              .map((item) => (
                <div key={item.encodeId} className={cx('song-item')}>
                  <Image src={item.thumbnail} alt={item.title} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistItem;
