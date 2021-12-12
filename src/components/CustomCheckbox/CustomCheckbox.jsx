import React from 'react';
import PropTypes from 'prop-types';
import classes from './CustomCheckbox.module.scss'

function CustomCheckbox({ title, label }) {
  return (
    <div className={classes['custom-checkbox']}>
      <input id={label} className={classes['custom-checkbox__input']} type="checkbox" />
      <label className={classes['custom-checkbox__label']} htmlFor={label}>
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
  label: '',
};

CustomCheckbox.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string
};

export default CustomCheckbox;