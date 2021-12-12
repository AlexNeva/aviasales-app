import React from 'react';
import classes from './MoreBtn.module.scss'

function MoreBtn() {
  return (
    <button type='button' className={classes['more-btn']}>
      Показать еще 5 билетов!
    </button>
  );
}

export default MoreBtn;