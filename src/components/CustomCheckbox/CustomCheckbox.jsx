/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './CustomCheckbox.module.scss'

function CustomCheckbox({ title, id, checked, setFilter, checkedCount }) {

  console.log(checkedCount);

  return (
    <div className={classes['custom-checkbox']}>
      <input
        id={id}
        className={classes['custom-checkbox__input']}
        type="checkbox"
        checked={checked}
        onChange={() => {
          console.log(checkedCount);

          setFilter(id, checkedCount)
        }}
      />
      <label className={classes['custom-checkbox__label']} htmlFor={id}>
        <span className={classes["custom-checkbox__icon"]} />
        <span className={classes["custom-checkbox__text"]}>
          {title}
        </span>
      </label>
    </div >
  );
}

CustomCheckbox.defaultProps = {
  title: '',
  id: '',
  checked: false,
  setFilter: () => { },
  checkedCount: 0,
};

CustomCheckbox.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  setFilter: PropTypes.func,
  checkedCount: PropTypes.number,


};

export default connect()(CustomCheckbox);