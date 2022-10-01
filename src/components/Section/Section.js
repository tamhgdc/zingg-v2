import classNames from 'classnames/bind';

import styles from './Section.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const Section = ({ title, children, flex, wrap, grid, cols = 4, spaceBetween, onClick }) => {
  const classes = {
    flex,
    wrap,
    grid,
    spaceBetween,
  };

  const styles = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  return (
    <div className={cx('wrapper')}>
      {title && <h3 className={cx('title')}>{title}</h3>}
      <div className={cx('container', { ...classes })} style={{ ...styles }}>
        {children}
      </div>
      {onClick && (
        <div className={cx('footer-button')}>
          <Button outline transparent center fontSmall onClick={onClick}>
            TẤT CẢ
          </Button>
        </div>
      )}
    </div>
  );
};

export default Section;
