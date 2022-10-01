import { memo, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import * as Icon from 'iconoir-react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Player.module.scss';
import MusicItem from '~/components/MusicItem';
import Button from '~/components/Button/Button';
import { useState } from 'react';
import { getDuration } from '~/utils';
import { nextSong, prevSong } from '~/redux/musicSlice';

const cx = classNames.bind(styles);

const Player = ({ onClick, show }) => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const processRef = useRef(null);

  const currentSong = useSelector((state) => state.music.currentSong);
  const srcCurrentSong = useSelector((state) => state.music.srcCurrentSong);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (currentSong && srcCurrentSong) {
      audioRef.current.src = srcCurrentSong;
      audioRef.current.src && audioRef.current.play();
    }

    audioRef.current.addEventListener('timeupdate', (e) => {
      const currentTime = Math.floor(e.target.currentTime);
      setCurrentTime(currentTime);

      processRef.current.value = (currentTime * 100) / currentSong?.duration;
    });
  }, [currentSong, srcCurrentSong]);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('playing-song')}>
        <MusicItem
          player
          data={currentSong}
          isWorldWide={currentSong?.isWorldWide}
          className={cx('music-item')}
        />
      </div>
      <div className={cx('controller')}>
        <div className={cx('controller-area')}>
          <div className={cx('controller-inner')}>
            <Button
              transparent
              circled
              size={'22px'}
              className={cx('shuffle', { active: isShuffle })}
              onClick={() => setIsShuffle(!isShuffle)}
            >
              <Icon.Shuffle />
            </Button>
            <Button
              transparent
              circled
              size={'26px'}
              className={cx('prev')}
              onClick={() => {
                dispatch(prevSong(isShuffle));
                setIsPlaying(true);
              }}
            >
              <Icon.SkipPrevOutline fill="white" />
            </Button>
            <div className={cx('toggle-play')}>
              <Button
                transparent
                circled
                size={'26px'}
                className={cx('toggle-btn')}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Icon.PauseOutline fill="white" width={'1em'} />
                ) : (
                  <Icon.PlayOutline fill="white" width={'1em'} />
                )}
              </Button>
            </div>
            <Button
              transparent
              circled
              size={'26px'}
              className={cx('next')}
              onClick={() => {
                dispatch(nextSong(isShuffle));
                setIsPlaying(true);
              }}
            >
              <Icon.SkipNextOutline fill="white" />
            </Button>
            <Button
              transparent
              circled
              size={'26px'}
              className={cx('repeat', { active: isLoop })}
              onClick={() => setIsLoop(!isLoop)}
            >
              <Icon.Repeat />
            </Button>
          </div>
        </div>
        <div className={cx('process')}>
          <span className={cx('current-time')}>{getDuration(currentTime)}</span>
          <input
            ref={processRef}
            type="range"
            defaultValue={0}
            min="0"
            max="100"
            className={cx('process-bar')}
            // onChange={(e) => setCurrentTime((currentSong?.duration * e.target.value) / 100)}
          />
          <span className={cx('total-duration')}>
            {currentSong ? getDuration(currentSong?.duration) : '00:00'}
          </span>
          <audio hidden id="player" src="" ref={audioRef} loop={isLoop}></audio>
        </div>
      </div>
      <div className={cx('actions')}>
        <div className={cx('main')}>
          <Button transparent circled size={'36px'} className={cx('mv')}>
            <Icon.YouTube />
          </Button>
          <Button transparent circled size={'36px'} className={cx('lyric')}>
            <Icon.Music2 />
          </Button>
          <Button transparent circled size={'36px'} className={cx('picture-in-picture')}>
            <Icon.MultiWindow />
          </Button>
          <Button transparent circled size={'36px'} className={cx('volumn')}>
            <Icon.SoundHigh />
          </Button>
          <input
            className={cx('volume-bar')}
            type="range"
            min={0}
            max={100}
            value={volume * 100}
            onChange={(e) => setVolume(e.target.value / 100)}
          />
        </div>
        <div className={cx('sub')}>
          <Button
            secondary
            size={'30px'}
            squared
            className={cx('show-playlist', { show })}
            onClick={onClick}
          >
            <Icon.Playlist />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Player);
