import {
  AlbumCarousel,
  CompactDisc,
  StatsSquareUp,
  VoiceCircled,
  Journal,
  Music1,
  ReportColumns,
  StarOutline,
  YouTube,
} from 'iconoir-react';

import configs from '~/configs';

const sidebarItem = [
  { to: configs.routes.mymusic, icon: <AlbumCarousel />, title: 'Cá Nhân' },
  { to: configs.routes.home, icon: <CompactDisc />, title: 'Khám Phá' },
  { to: configs.routes.zingchart, icon: <StatsSquareUp />, title: '#zingchart' },
  { to: configs.routes.radio, icon: <VoiceCircled />, title: 'Radio' },
  { to: configs.routes.following, icon: <Journal />, title: 'Theo Dõi' },
  { to: configs.routes.newRelease, icon: <Music1 />, title: 'Nhạc Mới', scrollable: true },
  { to: configs.routes.category, icon: <ReportColumns />, title: 'Thể Loại', scrollable: true },
  { to: configs.routes.top100, icon: <StarOutline />, title: 'Top 100', scrollable: true },
  { to: configs.routes.musicVideo, icon: <YouTube />, title: 'MV', scrollable: true },
];

export { sidebarItem };
export { default } from './Sidebar';
