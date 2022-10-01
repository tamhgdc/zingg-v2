import classNames from 'classnames/bind';
import * as Icon from 'iconoir-react';

import styles from './Header.module.scss';
import Popper, { PopperBlock } from '~/components/Popper';

const cx = classNames.bind(styles);

const settings = [
  { title: 'Danh sách chặn', icon: Icon.Prohibition, isClientSetting: true },
  {
    title: 'Chất lượng nhạc',
    icon: Icon.Music2,
    isClientSetting: true,
    children: [
      { title: 'SQ · 128', desc: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn.' },
      {
        title: 'HQ · 320',
        desc: 'Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh.',
      },
    ],
  },
  { title: 'Giao diện', icon: Icon.Cloud, isClientSetting: true },
  { title: 'Giới thiệu', icon: Icon.InfoEmpty, isSeparate: true },
  { title: 'Góp ý', icon: Icon.WhiteFlag },
  { title: 'Liên hệ', icon: Icon.Phone },
  { title: 'Quảng cáo', icon: Icon.Megaphone },
  { title: 'Thỏa thuận sử dụng', icon: Icon.Page },
  { title: 'Chính sách bảo mật', icon: Icon.ShieldCheck },
];

const userOptions = [
  { title: 'Nâng cấp VIP', icon: Icon.StarOutline },
  { title: 'Mua code VIP', icon: Icon.ShoppingBag },
  { title: 'Đăng xuất', icon: Icon.LogOut, isSeparate: true },
];

const defaultPopper = (attrs) => {};

const settingPopper = () => (
  <div>
    <Popper>
      <PopperBlock>
        {settings
          .filter((item) => item.isClientSetting)
          .map((setting, index) => {
            const Icon = setting.icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {setting.title}
              </div>
            );
          })}
      </PopperBlock>
      <PopperBlock>
        {settings
          .filter((item) => !item.isClientSetting)
          .map(({ title, icon }, index) => {
            const Icon = icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {title}
              </div>
            );
          })}
      </PopperBlock>
    </Popper>
  </div>
);

const userPopper = () => (
  <div>
    <Popper>
      <PopperBlock>
        {userOptions
          .filter((item) => !item.isSeparate)
          .map((userOption, index) => {
            const Icon = userOption.icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {userOption.title}
              </div>
            );
          })}
      </PopperBlock>
      <PopperBlock>
        {userOptions
          .filter((item) => item.isSeparate)
          .map((userOption, index) => {
            const Icon = userOption.icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {userOption.title}
              </div>
            );
          })}
      </PopperBlock>
    </Popper>
  </div>
);

const actionList = [
  { type: 'theme', popper: defaultPopper, icon: Icon.UmbrellaFull, tooltip: 'Chủ đề' },
  { type: 'vip', popper: defaultPopper, icon: Icon.ThreeStars, tooltip: 'Nâng cấp VIP' },
  { type: 'upload', popper: defaultPopper, icon: Icon.ShareIos, tooltip: 'Tải lên' },
  { type: 'setting', popper: settingPopper, icon: Icon.Settings, tooltip: 'Cài đặt' },
  { type: 'avatar', popper: userPopper, icon: Icon.User },
];

export { actionList };
export { default } from './Header';
