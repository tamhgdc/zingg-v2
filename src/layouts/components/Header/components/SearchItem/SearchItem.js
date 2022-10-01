import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SearchItem.module.scss';
import Image from '~/components/Image';
import { PlayOutline } from 'iconoir-react';
import { getCompactNum } from '~/utils';

const cx = classNames.bind(styles);

const SearchItem = ({ data, type = 'song', ...props }) => {
  const ArtistSearchItem = () => {
    return (
      <Link to={`/artist/${data.alias}`} className={cx('wrapper', 'artist')} {...props}>
        <div className={cx('thumb')}>
          <Image src={data.thumbnailM} alt={data.name}></Image>
        </div>
        <div className={cx('body')}>
          <h3 className={cx('name')}>{data.name}</h3>
          <h3 className={cx('desc')}>
            Nghệ sĩ &middot; {getCompactNum(data.totalFollow)} quan tâm
          </h3>
        </div>
      </Link>
    );
  };

  const SongSearchItem = () => {
    return (
      <div className={cx('wrapper', 'song')} {...props}>
        <div className={cx('thumb')}>
          <Image src={data.thumbnailM} alt={data.title}></Image>
          <div className={cx('overlay')}>
            <span>
              <PlayOutline fill="white" />
            </span>
          </div>
        </div>
        <div className={cx('body')}>
          <h3 className={cx('name')}>{data.title}</h3>
          <h3 className={cx('desc')}>{data.artistsNames}</h3>
        </div>
      </div>
    );
  };

  return <>{type === 'artist' ? <ArtistSearchItem /> : <SongSearchItem />}</>;
};

export default SearchItem;
