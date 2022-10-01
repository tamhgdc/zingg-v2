import classNames from 'classnames/bind';
import { ArrowLeft, ArrowRight } from 'iconoir-react';
import Tippy from '@tippyjs/react/headless';
import ToolTip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import SearchBox from './components/SearchBox';
import Button from '~/components/Button';
import { actionList } from '.';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('navigate')}>
        <Button circled transparent offset={'left'} className={cx('prev', 'arrow')}>
          <ArrowLeft />
        </Button>
        <Button circled transparent offset={'left'} className={cx('next', 'arrow')}>
          <ArrowRight />
        </Button>
        <div className={cx('search-box')}>
          <SearchBox />
        </div>
      </div>
      <div className={cx('actions')}>
        {actionList.map((actionItem, index) => {
          const Icon = actionItem.icon;
          const props = {
            content: actionItem.tooltip,
            duration: 300,
          };

          if (!actionItem.tooltip) {
            props.disabled = true;
          }

          return (
            <div key={index}>
              <ToolTip {...props}>
                <Tippy
                  interactive
                  trigger={'click'}
                  render={actionItem.popper}
                  placement={'bottom-end'}
                >
                  <Button circled className={cx('action-btn', actionItem.type)}>
                    <Icon />
                  </Button>
                </Tippy>
              </ToolTip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
