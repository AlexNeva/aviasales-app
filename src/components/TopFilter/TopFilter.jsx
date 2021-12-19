/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './TopFilter.module.scss';
import TopFilterItem from './TopFilterItem';
import { sortBy } from '../../redux/actionsTickets';

function TopFilter({ topFilter, sortTickets, tickets }) {
  useEffect(() => {
    sortTickets()
  }, [tickets.length])


  return (
    <div className={classes['top-filter']}>
      {
        topFilter.map(filter =>
          <TopFilterItem
            key={filter.id}
            title={filter.title}
            active={filter.active}
            id={filter.id}
          />)
      }
    </div >
  );
}


const mapStateToProps = (state) => ({

  topFilter: state.sorting.sorting,
  tickets: state.tickets.tickets,

})

const mapDispatchToProps = {

  sortTickets: sortBy,

}



TopFilter.defaultProps = {
  tickets: [],
  topFilter: [],
  sortTickets: () => { },
};

TopFilter.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  topFilter: PropTypes.arrayOf(PropTypes.object),
  sortTickets: PropTypes.func,
};



export default connect(mapStateToProps, mapDispatchToProps)(TopFilter);