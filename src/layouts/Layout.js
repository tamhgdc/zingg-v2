import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import PropTypes from 'prop-types';

import styles from './Layout.module.scss';
import Header from '~/layouts/components/Header';
import Player from './components/Player';
import PlayerQueue from './components/PlayerQueue';
import { useState } from 'react';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  const [showPlayQueue, setShowPlayQueue] = useState(false);

  const handleSetShow = useCallback(() => {
    setShowPlayQueue((prev) => !prev);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Sidebar />
        <div className={cx('container')}>
          <main className={cx('main')}>
            <Header />
            {children}
          </main>
        </div>
        <PlayerQueue show={showPlayQueue} />
      </div>
      <div className={cx('footer')}>
        <Player onClick={handleSetShow} show={showPlayQueue} />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
