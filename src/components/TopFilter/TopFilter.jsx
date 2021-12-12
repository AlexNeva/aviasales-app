import React from 'react';
import classes from './TopFilter.module.scss'

function TopFilter() {
  return (
    <div className={classes['top-filter']}>
      <button type='button' className={`${classes["top-filter__control"]} ${classes.active}`}>Самый дешевый</button>
      <button type='button' className={classes["top-filter__control"]}>Самый быстрый</button>
      <button type='button' className={classes["top-filter__control"]}>Оптимальный</button>
    </div >
  );
}

export default TopFilter;