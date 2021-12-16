
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { transferFilter } from '../../redux/actionsFilter';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import classes from './SideFilter.module.scss'

function SideFilter({ sideFilter, setFilter }) {

  const checkedCount = sideFilter
    .reduce((acc, filter) => filter.transfer !== 'all' && filter.checked
      ? acc + 1
      : acc, 0)


  return (
    <div className={classes['side-filter']}>
      <div className={classes["side-filter__title"]}>
        Количество пересадок {checkedCount}
      </div>
      <div className={classes["side-filter__checkboxes"]}>
        {
          sideFilter.map(checkbox =>
            <CustomCheckbox
              key={checkbox.transfer}
              title={checkbox.title}
              id={checkbox.transfer}
              checked={checkbox.checked}
              setFilter={setFilter}
              checkedCount={checkedCount}
            />)
        }
      </div>
    </div>
  );
}




SideFilter.defaultProps = {
  sideFilter: [],
  setFilter: () => { }
};

SideFilter.propTypes = {
  sideFilter: PropTypes.arrayOf(PropTypes.object),
  setFilter: PropTypes.func
};

const mapStateToProps = (state) => ({

  sideFilter: state.filters.filters

})

const mapDispatchToProps = {
  setFilter: transferFilter
}




export default connect(mapStateToProps, mapDispatchToProps)(SideFilter);