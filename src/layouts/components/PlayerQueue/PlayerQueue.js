import { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import { Alarm, MoreHoriz } from 'iconoir-react';
import Tippy from '@tippyjs/react/headless';
import ToolTip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';

import styles from './PlayerQueue.module.scss';
import Button from '~/components/Button/Button';
import PlayerQueueItem from './components/PlayerQueueItem/PlayerQueueItem';
import Playlist from './components/Playlist';
import Recent from './components/Recent';

const cx = classNames.bind(styles);

const PlayerQueue = ({ show }) => {
  // const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState('playlist');

  // // Lấy playlist được dispatch từ album đã chọn
  // const playlist = useSelector((state) => state.music.playlistInQueue);
  // const currentSong = useSelector((state) => state.music.currentSong);

  return (
    <div className={cx('wrapper', { show })}>
      <div className={cx('header')}>
        <div className={cx('tabs-container')}>
          <span
            className={cx('tab-item', { active: currentTab === 'playlist' })}
            onClick={() => setCurrentTab('playlist')}
          >
            Danh sách phát
          </span>
          <span
            className={cx('tab-item', { active: currentTab === 'recent' })}
            onClick={() => setCurrentTab('recent')}
          >
            Nghe gần đây
          </span>
        </div>
        <div className={cx('set-timer')}>
          <ToolTip content={'Hẹn giờ dừng phát nhạc'}>
            <Tippy interactive trigger={'click'} render={() => {}} placement={'bottom-end'}>
              <Button circled className={cx('action-btn')}>
                <Alarm />
              </Button>
            </Tippy>
          </ToolTip>
        </div>
        <div className={cx('more')}>
          <ToolTip content={'Khác'}>
            <Tippy interactive trigger={'click'} render={() => {}} placement={'bottom-end'}>
              <Button circled className={cx('action-btn', 'more-btn')}>
                <MoreHoriz fill="white" />
              </Button>
            </Tippy>
          </ToolTip>
        </div>
      </div>
      <div className={cx('body')}>{currentTab === 'playlist' ? <Playlist /> : <Recent />}</div>
    </div>
  );
};

export default PlayerQueue;
