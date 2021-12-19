import React from 'react';
import PropTypes from 'prop-types';

import classes from './MoreBtn.module.scss'

function MoreBtn({ title, changeResultCounter, sub }) {
  return (
    <button
      type='button'
      className={classes['more-btn']}
      onClick={() => changeResultCounter(sub)}
    >
      Показать еще {title} билетов!
    </button>
  );
}

MoreBtn.defaultProps = {
  title: 5,
  sub: 5,
  changeResultCounter: () => { }
};

MoreBtn.propTypes = {
  title: PropTypes.number,
  sub: PropTypes.number,
  changeResultCounter: PropTypes.func
};

export default MoreBtn;