/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './TopFilter.module.scss';
import ticketsSort from '../../redux/actionsSorting';
import { sortBy } from '../../redux/actionsTickets';



function TopFilterItem({ title, active, id, sortingFilters, sortTickets }) {


  const cls = [classes["top-filter__control"]]

  if (active) {
    cls.push(classes["top-filter__control--active"])
  }

  return (
    <button
      type='button'
      className={cls.join(' ')}
      id={id}
      onClick={(evt) => {
        sortingFilters(evt.target.id, active)
        sortTickets(evt.target.id)
      }}
    >
      {title}
    </button>
  );
}




TopFilterItem.defaultProps = {
  title: '',
  active: false,
  id: '',
  sortingFilters: () => { },
  sortTickets: () => { },

};

TopFilterItem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.string,
  sortingFilters: PropTypes.func,
  sortTickets: PropTypes.func,

};


const mapDispatchToProps = {
  sortingFilters: ticketsSort,
  sortTickets: sortBy,

}



export default connect(null, mapDispatchToProps)(TopFilterItem);