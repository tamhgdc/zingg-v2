import classNames from 'classnames/bind';

import styles from './Top100.module.scss';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import Section from '~/components/Section';
import AlbumItem from '~/components/AlbumItem';
import Skeleton from '~/components/Skeleton';

const cx = classNames.bind(styles);

const Top100 = () => {
  const [response, loading] = useSimpleFetch('top100');

  //convert obect --> array
  const top100 = Object.values(response);
  console.log('Top100 ~ top100', top100);

  return (
    <div className={cx('wrapper')}>
      {loading ? (
        <Skeleton type={'top100'} />
      ) : (
        <div>
          {/* Album lists */}
          {top100.map((top100Item) => (
            <Section grid cols={5} key={top100Item.genre.name} title={top100Item.title}>
              {top100Item?.items?.map((playlist, index) => (
                <AlbumItem key={playlist.encodeId} data={playlist} />
              ))}
            </Section>
          ))}
        </div>
      )}
    </div>
  );
};

export default Top100;
