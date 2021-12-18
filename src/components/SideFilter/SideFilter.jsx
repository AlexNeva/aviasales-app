/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { transferFilter } from '../../redux/actionsFilter'


import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import classes from './SideFilter.module.scss'

function SideFilter({ sideFilter, setFilter }) {

  const isAllChecked = !!sideFilter.reduce((acc, filter) => filter.transfer !== 'all'
    ? acc * filter.checked
    : acc
    , true)


  useEffect(() => {
    if (isAllChecked) {
      setFilter('all', true)
    } else {
      setFilter('all', false)
    }
  }, [isAllChecked])



  return (
    <div className={classes['side-filter']}>
      <div className={classes["side-filter__title"]}>
        Количество пересадок
      </div>
      <div className={classes["side-filter__checkboxes"]}>
        {
          sideFilter.map(checkbox =>
            <CustomCheckbox
              key={checkbox.transfer}
              title={checkbox.title}
              id={checkbox.transfer}
              checked={checkbox.checked}
              role={checkbox.role}
            />)
        }
      </div>
    </div>
  );
}




SideFilter.defaultProps = {
  sideFilter: [],
  setFilter: () => { },

};

SideFilter.propTypes = {
  sideFilter: PropTypes.arrayOf(PropTypes.object),
  setFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sideFilter: state.filters.filters,
  isAllChecked: state.filters.allChacked
})

const mapDispatchToProps = {
  setFilter: transferFilter,
}


export default connect(mapStateToProps, mapDispatchToProps)(SideFilter);

