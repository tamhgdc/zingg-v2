import { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Radio.module.scss';
import Section from '~/components/Section';
import RadioItem from '~/components/RadioItem';
import reducer from './reducer';
import initialState from './initialState';
import request from '~/requests';
import { ADD_ALL } from './actions';
import AlbumItem from '~/components/AlbumItem';
import Image from '~/components/Image';
import Skeleton from '~/components/Skeleton';

const cx = classNames.bind(styles);

const Radio = () => {
  const [radio, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  console.log('Home ~ radio', radio);

  useEffect(() => {
    const fetchData = async () => {
      const response = await request.get('radio');
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
        livestream: getData(res, 'radHot', 'livestream') || {},
        podcast: getData(res, 'radPromoteProgram', 'podcast') || {},
        banner: getData(res, undefined, 'Radio_Banner') || {},
        category: getData(res, 'radPromoteCategory', 'podcast_category') || {},
        newProgram: getData(res, 'radLastestProgram', 'podcast') || {},
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
        <Skeleton type={'radio'} />
      ) : (
        <>
          {/* Live stream */}
          <Section spaceBetween>
            {radio.livestream.items?.map(
              (item, index) => index < 7 && <RadioItem key={item.encodeId} data={item} />
            )}
          </Section>

          {/* Khám phá podcast */}
          <Section title={radio.podcast?.title}>
            {radio.podcast?.items?.map(
              (item, index) =>
                index < 5 && <AlbumItem overlay={false} key={item.encodeId} data={item} />
            )}
          </Section>

          {/* Banner */}
          <Section title={radio.banner?.title}>
            {radio.banner?.items?.map((item, index) => (
              <div key={index} className={cx('banner-wrapper')}>
                <Image src={item.thumbnail} alt={item.title} />
              </div>
            ))}
          </Section>

          {/* Thể loại Podcast */}
          <Section title={radio.category?.title}>
            {radio.category?.items?.map(
              (item, index) =>
                index < 5 && (
                  <div key={item.id} className={cx('category-wrapper')}>
                    <Image src={item.thumbnail} alt={item.title} />
                  </div>
                )
            )}
          </Section>

          {/* Chương trình mới */}
          <Section title={radio.newProgram?.title}>
            {radio.newProgram?.items?.map(
              (item, index) =>
                index < 5 && <AlbumItem overlay={false} key={item.encodeId} data={item} />
            )}
          </Section>
        </>
      )}
    </main>
  );
};

export default Radio;
