import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { Plus } from 'iconoir-react';

import styles from './Sidebar.module.scss';
import Logo from '~/assets/Logo';
import { sidebarItem } from '.';
import SuggestBox from '../../../components/SuggestBox';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <Link to={'/'} className={cx('logo')}>
        <Logo />
      </Link>
      <div className={cx('nav-fixed')}>
        {sidebarItem
          .filter((item) => !item.scrollable)
          .map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => cx('sidebar-item', { active: isActive })}
            >
              <span className={cx('sidebar-item-icon')}>{item.icon}</span>
              <p className={cx('sidebar-item-title')}>{item.title}</p>
            </NavLink>
          ))}
      </div>
      <div className={cx('nav-scrollable')}>
        {sidebarItem
          .filter((item) => item.scrollable)
          .map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => cx('sidebar-item', { active: isActive })}
            >
              <span className={cx('sidebar-item-icon')}>{item.icon}</span>
              <p className={cx('sidebar-item-title')}>{item.title}</p>
            </NavLink>
          ))}
        <div className={cx('nav-boxes')}>
          <SuggestBox
            title="Đăng nhập để khám phá playlist dành riêng cho bạn"
            titleBtn="Đăng nhập"
          />
          <SuggestBox
            title="Nghe nhạc không quảng cáo cùng kho nhạc VIP"
            titleBtn="Nâng cấp VIP"
            gradient
          />
        </div>
      </div>
      <div className={cx('nav-create-playlist')}>
        <span className={cx('create-playlist-icon')}>
          <Plus />
        </span>
        <b className={cx('create-playlist-title')}>Tạo playlist mới</b>
      </div>
    </aside>
  );
};

export default Sidebar;
