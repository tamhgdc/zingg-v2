import { memo, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { NavArrowLeft, NavArrowRight } from 'iconoir-react';

import styles from './Gallery.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const Gallery = ({ data = [] }) => {
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState([0, 1, 2]);
  const [first, current, last] = useMemo(() => {
    return show;
  }, [show]);
  const nextBtn = useRef();

  //click to set toggle --> reset timer
  useEffect(() => {
    const timerId = setInterval(() => {
      nextBtn.current.click();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [toggle]);

  const handleShowPrev = () => {
    setToggle(!toggle);
    setShow((prev) =>
      prev.map((showIndex) => {
        let newValue = showIndex - 1;
        if (showIndex <= 0) newValue = data?.items?.length - 1;
        return newValue;
      })
    );
  };

  const handleShowNext = () => {
    setToggle(!toggle);
    setShow((prev) =>
      prev.map((showIndex) => {
        let newValue = showIndex + 1;
        if (showIndex >= data?.items?.length - 1) newValue = 0;
        return newValue;
      })
    );
  };

  return (
    <div className={cx('wrapper')}>
      <span onClick={handleShowPrev} className={cx('prev-btn', 'controller')}>
        <NavArrowLeft />
      </span>

      <div className={cx('container')}>
        <div className={cx('background')}></div>
        {data?.items?.map((item, index) => {
          const classNameCond = {
            'first-item': first === index,
            'current-item': current === index,
            'last-item': last === index,
          };
          return (
            <div
              key={item.encodeId}
              className={cx('gallery-item', {
                ...classNameCond,
                pending: ![first, current, last].includes(index),
              })}
            >
              <Image
                src={item.banner}
                alt={item.title || item.description || ''}
                className={cx('gallery-img')}
              />
            </div>
          );
        })}
        {/* {galleryImg.map((galleryItem, index) => {
          const classNameCond = {
            'first-item': first === index,
            'current-item': current === index,
            'last-item': last === index,
          };

          return (
            <div
              key={index}
              className={cx('gallery-item', {
                ...classNameCond,
                pending: ![first, current, last].includes(index),
              })}
            >
              <Image src={galleryItem} alt="" className={cx('gallery-img')} />
            </div>
          );
        })} */}
      </div>

      <span ref={nextBtn} onClick={handleShowNext} className={cx('next-btn', 'controller')}>
        <NavArrowRight />
      </span>
    </div>
  );
};

export default memo(Gallery);
