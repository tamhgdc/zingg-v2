import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './NewRelease.module.scss';
import Button from '~/components/Button';
import Skeleton from '~/components/Skeleton';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import MusicItem from '~/components/MusicItem';

const cx = classNames.bind(styles);

const NewRelease = () => {
  const [newRelease, loading] = useSimpleFetch('chart/new-release');
  console.log('NewRelease ~ newRelease', newRelease);

  return (
    <main className={cx('wrapper')}>
      {loading ? (
        <Skeleton type={'chart'} />
      ) : (
        <>
          <div className={cx('heading')}>
            <h1>{newRelease.title}</h1>
            <Button circled primary>
              <PlayOutline fill="white" />
            </Button>
          </div>
          <div className={cx('content')}>
            {newRelease?.title.length > 0 &&
              newRelease?.items?.map((item, index) => (
                <MusicItem key={item.encodeId} type={'rank'} data={item} rank={index + 1} />
              ))}
          </div>
        </>
      )}
    </main>
  );
};

export default NewRelease;
