/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './CustomCheckbox.module.scss'
import { transferFilter } from '../../redux/actionsFilter'

function CustomCheckbox({ title, id, checked, role, setFilter }) {

  return (
    <div className={classes['custom-checkbox']}>
      <input
        id={id}
        className={classes['custom-checkbox__input']}
        type="checkbox"
        checked={checked}
        onChange={(evt) => {
          setFilter(evt.target.id, evt.target.checked, role)
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
  role: '',
};

CustomCheckbox.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  setFilter: PropTypes.func,
  role: PropTypes.string,
};

const mapDispatchToProps = {
  setFilter: transferFilter,
}

export default connect(null, mapDispatchToProps)(CustomCheckbox);