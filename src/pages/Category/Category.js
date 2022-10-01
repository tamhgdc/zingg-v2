import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import Section from '~/components/Section';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import CategoryItem from '~/components/CategoryItem';
import AlbumItem from '~/components/AlbumItem';
import Skeleton from '~/components/Skeleton';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const Category = () => {
  const [show, setShow] = useState(8);
  const [categories, loading] = useSimpleFetch('category/');

  return (
    <main className={cx('wrapper')}>
      {loading ? (
        <Skeleton type={'category'} />
      ) : (
        <div>
          {/* Banner */}
          <div className={cx('banner')}>
            {categories.banners && (
              <Image
                src={
                  categories?.banners[Math.floor(Math.random() * categories?.banners.length)]?.cover
                }
                alt=""
              />
            )}
          </div>

          {/* Tâm trạng và hoạt động */}
          <Section grid title={'Tâm trạng và hoạt động'} onClick={() => setShow(16)}>
            {categories?.topic?.map(
              (item, index) =>
                index < show && <CategoryItem key={item.encodeId} type={'activity'} data={item} />
            )}
          </Section>

          {/* Quốc gia */}
          <Section flex title={'Quốc gia'}>
            {categories?.nations?.map((item) => (
              <CategoryItem center key={item.encodeId} data={item} />
            ))}
          </Section>

          {/* Album lists */}
          {categories?.genre?.map((category) => (
            <Section key={category.encodeId} title={category.title}>
              {category?.playlists?.map(
                (playlist, index) =>
                  index < 5 && <AlbumItem key={playlist.encodeId} data={playlist} />
              )}
            </Section>
          ))}
        </div>
      )}
    </main>
  );
};

export default Category;
