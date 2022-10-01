import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Recent.module.scss';
import PlayerQueueItem from '../PlayerQueueItem';

const cx = classNames.bind(styles);

const Recent = () => {
  // Lấy playlist được dispatch từ album đã chọn
  const recentSongs = useSelector((state) => state.music.recentSongs);
  const currentSong = useSelector((state) => state.music.currentSong);

  return (
    <div className={cx('wrapper')}>
      {recentSongs.length > 0 &&
        recentSongs.map(
          (item, index) =>
            item.isWorldWide && (
              <PlayerQueueItem
                key={item.encodeId}
                indexOfSong={index}
                isPlaying={currentSong?.encodeId === item?.encodeId}
                data={item}
              />
            )
        )}
    </div>
  );
};

export default Recent;
