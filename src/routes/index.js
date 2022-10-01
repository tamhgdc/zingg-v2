import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';
import ZingChart from '~/pages/ZingChart';
import Radio from '~/pages/Radio';
import Following from '~/pages/Following';
import NewRelease from '~/pages/NewRelease';
import Category from '~/pages/Category';
import Top100 from '~/pages/Top100';
import Album from '~/pages/Album';
import Artist from '~/pages/Artist';
import configs from '~/configs';

const routes = [
  { path: configs.routes.home, page: Home },
  { path: configs.routes.mymusic, page: MyMusic },
  { path: configs.routes.zingchart, page: ZingChart },
  { path: configs.routes.radio, page: Radio },
  { path: configs.routes.following, page: Following },
  { path: configs.routes.newRelease, page: NewRelease },
  { path: configs.routes.category, page: Category },
  { path: configs.routes.top100, page: Top100 },
  { path: configs.routes.album, page: Album },
  { path: configs.routes.artist, page: Artist },
];

export default routes;
