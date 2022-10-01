import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Playlist.module.scss';
import PlayerQueueItem from '../PlayerQueueItem';

const cx = classNames.bind(styles);

const Playlist = () => {
  // Lấy playlist được dispatch từ album đã chọn
  const playlist = useSelector((state) => state.music.playlistInQueue);
  const currentSong = useSelector((state) => state.music.currentSong);

  return (
    <div className={cx('wrapper')}>
      {playlist.length > 0 &&
        playlist.map(
          (item, index) =>
            item.isWorldWide && (
              <Fragment key={item.encodeId}>
                <PlayerQueueItem
                  indexOfSong={index}
                  isPlaying={currentSong?.encodeId === item?.encodeId}
                  key={item.encodeId}
                  data={item}
                />
                {currentSong?.encodeId === item?.encodeId && (
                  <h3 className={cx('title')}>Tiếp theo</h3>
                )}
              </Fragment>
            )
        )}
    </div>
  );
};

export default Playlist;
