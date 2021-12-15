import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import classes from './SideFilter.module.scss'

function SideFilter({ sideFilter }) {
  // const checkboxes = [
  //   { id: 'all', title: 'Все' },
  //   { id: '0-transfer', title: 'Без пересадок' },
  //   { id: '1-transfer', title: '1 пересадка' },
  //   { id: '2-transfer', title: '2 пересадки' },
  //   { id: '3-transfer', title: '3 пересадки' },
  // ]
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
              label={checkbox.transfer}
            />)
        }
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    sideFilter: state.filters.filters
  }
}


SideFilter.defaultProps = {
  sideFilter: [],
};

SideFilter.propTypes = {
  sideFilter: PropTypes.arrayOf(PropTypes.object),
};



export default connect(mapStateToProps, null)(SideFilter);