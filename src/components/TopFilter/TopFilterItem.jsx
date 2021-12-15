import React from 'react';
import PropTypes from 'prop-types';
import classes from './TopFilter.module.scss';

function TopFilterItem({ title, active }) {

  const cls = [classes["top-filter__control"]]

  if (active) {
    cls.push(classes["top-filter__control--active"])
  }

  return (
    <button
      type='button'
      className={cls.join(' ')}
    >
      {title}
    </button>
  );
}




TopFilterItem.defaultProps = {
  title: '',
  active: false,
};

TopFilterItem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool
};

export default TopFilterItem;