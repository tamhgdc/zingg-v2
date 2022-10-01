import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './Artist.module.scss';
import Button from '~/components/Button';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import { PlayOutline } from 'iconoir-react';
import Image from '~/components/Image';
import { getCompactNum } from '~/utils';
import Section from '~/components/Section';
import AlbumItem from '~/components/AlbumItem';
import Skeleton from '~/components/Skeleton';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const Artist = () => {
  const { alias } = useParams();
  const [artist, loading] = useSimpleFetch('artist/', alias);
  const playlist = useSelector((state) => state.music.playlistInQueue);
  console.log('PlayerQueue ~ playlist', playlist);

  return (
    <div className={cx('wrapper')}>
      {loading ? (
        <Skeleton type={'artist'} />
      ) : (
        <>
          <div className={cx('top')}>
            <div className={cx('info')}>
              <h1 className={cx('name')}>{artist?.name}</h1>
              <p className={cx('desc')}>{artist?.sortBiography}</p>
              <div className={cx('button-group')}>
                <Button solid large>
                  <PlayOutline fill="white" /> PHÁT NHẠC
                </Button>
                <Button outline transparent large>
                  <span className={cx('btn-content')}>
                    QUAN TÂM <span>&middot;</span>{' '}
                    {artist?.totalFollow && getCompactNum(artist?.totalFollow)}
                  </span>
                </Button>
              </div>
              <div className={cx('lastest-song')}>
                <div className={cx('lasted-song-thumb')}>
                  <Image src={artist?.topAlbum?.thumbnailM} alt={artist?.topAlbum?.title} />
                  <div className={cx('overlay')}>
                    <PlayOutline fill="white" />
                  </div>
                </div>
                <div className={cx('lasted-song-body')}>
                  <span>MỚI NHẤT</span>
                  <p className={cx('lasted-song-title')}>{artist?.topAlbum?.title}</p>
                  <p className={cx('lasted-song-timestamp')}>{artist?.topAlbum?.releaseDate}</p>
                </div>
              </div>
            </div>
            <div className={cx('thumb')}>
              <Image src={artist?.thumbnailM} alt={artist?.name} />
            </div>
          </div>
          <div className={cx('body')}>
            {artist?.sections?.map(
              (section, index) =>
                index !== 0 && (
                  <Section grid cols={5} key={index} title={section.title}>
                    {section?.items?.map((item, index) => {
                      return <AlbumItem key={item.encodeId || index} data={item} />;
                    })}
                  </Section>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Artist;
