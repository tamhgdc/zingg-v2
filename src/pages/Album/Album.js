import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import ToolTip from '@tippyjs/react/';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Album.module.scss';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import Button from '~/components/Button';
import { Heart, MoreHoriz, PlayOutline } from 'iconoir-react';
import MusicItem from '~/components/MusicItem';
import { getCompactNum, getDate } from '~/utils';
import Skeleton from '~/components/Skeleton';
import Image from '~/components/Image';
import ArtistLink from '~/components/ArtistLink';
import { setCurrentSong, setPlaylistInQueue } from '~/redux/musicSlice';

const cx = classNames.bind(styles);

const Album = () => {
  const dispatch = useDispatch();

  const currentMusic = useSelector((state) => state.music.currentSong);
  const { id } = useParams();
  const [album, loading] = useSimpleFetch('playlist/', id);

  const handleSetPlaylist = (indexOfSong) => {
    if (album.song?.items) {
      dispatch(setPlaylistInQueue(album.song?.items));
      dispatch(setCurrentSong(indexOfSong));
    }
  };

  return (
    <div className={cx('wrapper')}>
      {loading ? (
        <Skeleton type="album" />
      ) : (
        <>
          <div className={cx('album-info')}>
            <div className={cx('thumb')} onClick={() => handleSetPlaylist(0)}>
              <Image src={album?.thumbnailM} alt={album?.title} />
              <div className={cx('overlay')}>
                <span className={cx('play-btn')}>
                  <PlayOutline fill="white" />
                </span>
              </div>
            </div>
            <div className={cx('detail')}>
              <h3 className={cx('title')}>{album?.title}</h3>
              <p className={cx('updated-time')}>
                Cập nhật: {album.contentLastUpdate && getDate(album?.contentLastUpdate)}
              </p>
              <div className={cx('artist-links')}>
                {album?.artists?.map((artist) => (
                  <ArtistLink key={artist.id} to={`/artist/${artist.alias}`}>
                    {artist.name}
                  </ArtistLink>
                ))}
              </div>
              <p className={cx('favorites')}>
                {album.like && getCompactNum(album?.like)} người yêu thích
              </p>
            </div>
            <div className={cx('footer')}>
              <Button solid large>
                <PlayOutline fill="white" />
                TIẾP TỤC PHÁT
              </Button>
              <div className={cx('actions')}>
                <ToolTip content="Thêm vào thư viện">
                  <Button circled className={cx('action-btn')}>
                    <Heart />
                  </Button>
                </ToolTip>
                <ToolTip content="Khác">
                  <Button circled className={cx('action-btn')}>
                    <MoreHoriz />
                  </Button>
                </ToolTip>
              </div>
            </div>
          </div>
          <div className={cx('album-songs')}>
            {album.description && (
              <div className={cx('heading')}>
                <span className={cx('heading-text')}>Lời tựa</span> {album?.description}
              </div>
            )}
            <div className={cx('container')}>
              <div className={cx('table-heading')}>
                <span className={cx('song-name')}>Bài hát</span>
                <span className={cx('song-album')}>Album</span>
                <span className={cx('song-duration')}>Thời gian</span>
              </div>
              {album?.song?.items?.map((item, index) => (
                <MusicItem
                  icon
                  isPlaying={currentMusic?.encodeId === item?.encodeId}
                  isWorldWide={item.isWorldWide}
                  key={item.encodeId}
                  data={item}
                  onClick={() => {
                    handleSetPlaylist(index);
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Album;
