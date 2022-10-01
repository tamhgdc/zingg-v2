import classNames from 'classnames/bind';
import { Minus, Music1, PlayOutline } from 'iconoir-react';
import { useDispatch } from 'react-redux';

import styles from './MusicItem.module.scss';
import Image from '~/components/Image';
import { getDuration } from '~/utils';
import { setCurrentSong } from '~/redux/musicSlice';
import ArtistLink from '../ArtistLink';
import useSimpleFetch from '~/hooks/useSimpleFetch';

const cx = classNames.bind(styles);

// const handlePlayMusic = async (dispatch, songInfo) => {
//   dispatch(setCurrentSong(songInfo));
//   console.log(songInfo.indexOfSong);

//   const player = document.querySelector('audio');
//   if (player) {
//     player.src = songInfo.src;
//     player.play();
//   }
// };

const MusicItem = ({
  data,
  rank,
  small,
  icon,
  type = 'default',
  className,
  player,
  isPlaying,
  indexOfSong,
  isWorldWide,
  ...props
}) => {
  // const dispatch = useDispatch();
  // const [src, loading] = useSimpleFetch('song/', data?.encodeId);

  const classes = {
    small,
    player,
    [type]: type,
    [className]: className,
    playing: isPlaying,
    vip: !isWorldWide,
  };
  return (
    <div
      className={cx('wrapper', { ...classes })}
      {...props}
      // onClick={() => handlePlayMusic(dispatch, { ...data, indexOfSong, src: src[128] })}
    >
      <div className={cx('music')}>
        {icon && (
          <div className={cx('icon')}>
            <Music1 />
          </div>
        )}
        {type === 'rank' && (
          <div className={cx('rank')}>
            <div className={cx('rank-num')}>{rank}</div>
            <h4 className={cx('status')}>
              <Minus />
            </h4>
          </div>
        )}
        <div className={cx('thumb')}>
          <Image src={data?.thumbnailM} alt="" />
          <span className={cx('play-icon')}>
            <PlayOutline fill="white" color="white" />
          </span>
        </div>
        <div className={cx('info')}>
          <div className={cx('name')}>
            {data?.title} {!isWorldWide && <span className={cx('vip-tag')}>VIP</span>}
          </div>
          <p className={cx('singer')}>
            {data?.artists?.map((artist) => (
              <ArtistLink
                key={artist.id}
                to={`/artist/${artist.alias}`}
                onClick={(e) => e.stopPropagation()}
              >
                {artist.name}
              </ArtistLink>
            ))}
          </p>
        </div>
      </div>
      <div className={cx('album')}>{data?.album?.title}</div>
      {type === 'default' && <div className={cx('duration')}>{getDuration(data?.duration)}</div>}
    </div>
  );
};

export default MusicItem;
