import { useEffect, useReducer } from 'react';
import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './Home.module.scss';
import request from '~/requests';
import Gallery from './components/Gallery';
import Section from '~/components/Section/Section';
import AlbumItem from '~/components/AlbumItem';

import initialState from './initialState';
import { ADD_ALL } from './actions';
import reducer from './reducer';
import ArtistItem from '~/components/ArtistItem';
import AvatarItem from '~/components/AvatarItem';
import Button from '~/components/Button';
import Skeleton from '~/components/Skeleton';
import { useState } from 'react';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await request.get('home');
      return response.data;
    };

    const getData = function (res, sectionId, sectionType) {
      return res?.data?.items?.find(
        (item) =>
          (sectionId ? item.sectionId === sectionId : true) && item.sectionType === sectionType
      );
    };

    fetchData().then((res) => {
      const payload = {
        banner: getData(res, 'hSlider', 'banner') || {},
        newDay: getData(res, 'hAutoTheme1', 'playlist') || {},
        newRelease: getData(res, undefined, 'new-release') || {},
        newSongs: getData(res, 'hNewrelease', 'newReleaseChart') || {},
        favoriteArtist: getData(res, 'hMix', 'mix') || {},
        newSongsEveryDay: getData(res, 'hAutoTheme2', 'playlist') || {},
        weekChart: getData(res, undefined, 'weekChart') || [],
        top100: getData(res, 'h100', 'playlist') || {},
        albums: getData(res, 'hAlbum', 'playlist') || {},
        xoneCorner: getData(res, 'hXone', 'playlist') || {},
        events: getData(res, 'hSlider', 'event') || {},
      };

      dispatch({
        type: ADD_ALL,
        payload,
      });

      setLoading(false);
    });
  }, []);
  return (
    <main className={cx('wrapper')}>
      {loading ? (
        <Skeleton type={'feed'} />
      ) : (
        <div>
          {/* Gallery */}
          <Gallery data={state?.banner} />

          {/* Giai điệu ký ức */}
          <Section title={state?.newDay?.title}>
            {state?.newDay?.items?.map((item) => (
              <AlbumItem key={item.encodeId} data={item} />
            ))}
          </Section>

          {/* Nghệ sĩ yêu thích */}
          <Section title={state?.favoriteArtist?.title}>
            {state?.favoriteArtist?.items
              ?.filter((item, index) => index < 5)
              ?.map((item) => (
                <ArtistItem key={item.encodeId} data={item} className={cx('artist-item')} />
              ))}
          </Section>

          {/* Nhạc mới mỗi ngày */}
          <Section title={state?.newSongsEveryDay?.title}>
            {state?.newSongsEveryDay?.items?.map((item) => (
              <AlbumItem key={item.encodeId} data={item} />
            ))}
          </Section>

          {/* Week Chart */}
          <Section flex>
            {state?.weekChart?.items?.map((item, index) => (
              <div key={index} className={cx('weekChart')}>
                <Image src={item.cover} alt="" />
              </div>
            ))}
          </Section>

          {/* Top 100 */}
          <Section title={state?.top100?.title}>
            {state?.top100?.items?.map(
              (item, index) => index < 5 && <AlbumItem key={item.encodeId} data={item} />
            )}
          </Section>

          {/* Nhạc mới */}
          <Section flex title={state?.newSongs?.title}>
            {state?.newSongs?.items
              ?.filter((item, index) => index < 3)
              .map((item, index) => (
                <div key={item.encodeId} className={cx('music-card')}>
                  <div className={cx('music-card-img')}>
                    <div className={cx('music-card-overlay')}>
                      <span className={cx('play-btn')}>
                        <PlayOutline />
                      </span>
                    </div>
                    <Image src={item.thumbnailM} alt="" />
                  </div>
                  <div className={cx('music-card-body')}>
                    <div className={cx('music-card-header')}>
                      <h3 className={cx('music-card-title')}>{item.title}</h3>
                      <p className={cx('music-card-singer')}>{item.artistsNames}</p>
                    </div>
                    <div className={cx('music-card-footer')}>
                      <span className={cx('music-card-rank')}>#{index + 1}</span>
                      <span className={cx('music-card-date')}>10.03.2003</span>
                    </div>
                  </div>
                </div>
              ))}
          </Section>

          {/* hAlbum */}
          <Section>
            {state?.albums?.items?.map(
              (item, index) =>
                index < 5 && (
                  <AlbumItem key={item.encodeId} data={item} className={cx('section-item')} />
                )
            )}
          </Section>

          {/* hXone */}
          <Section title={state?.xoneCorner?.title}>
            {state?.xoneCorner?.items
              ?.filter((item, index) => index < 5)
              .map((item) => (
                <AlbumItem key={item.encodeId} data={item} className={cx('section-item')} />
              ))}
          </Section>

          {/* Sự kiện */}
          <Section flex title={state?.events?.title}>
            {state?.events?.items
              ?.filter((item, index) => index < 3)
              .map((item) => (
                <div key={item.encodeId} className={cx('event-card')}>
                  <div className={cx('event-card-header')}>
                    <Image src={item.coverHM} alt="" />
                    <div className={cx('event-card-info')}>
                      <span className={cx('event-card-label')}>{item.label}</span>
                      <h3 className={cx('event-card-title')}>{item.title}</h3>
                      <p className={cx('event-card-timestamp')}>11:00 Thứ sáu, 16 tháng 9</p>
                    </div>
                  </div>
                  <div className={cx('event-card-fotter')}>
                    <div className={cx('event-card-care')}>
                      <p className={cx('event-card-care-title')}>Lượt quan tâm</p>
                      <div className={cx('event-card-care-list')}>
                        <span className={cx('event-card-care-number')}>
                          +{item.totalFollow - item.followers.length}
                        </span>
                        {item.followers.map((follower) => (
                          <AvatarItem key={follower.id} small img={follower.avatar} />
                        ))}
                      </div>
                    </div>
                    <Button large solid>
                      QUAN TÂM
                    </Button>
                  </div>
                </div>
              ))}
          </Section>
        </div>
      )}
    </main>
  );
};

export default Home;
