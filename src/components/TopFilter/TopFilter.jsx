import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './TopFilter.module.scss';
import TopFilterItem from './TopFilterItem';

function TopFilter({ topFilter }) {
  return (
    <div className={classes['top-filter']}>
      {
        topFilter.map(filter =>
          <TopFilterItem
            key={filter.id}
            title={filter.title}
            active={filter.active}
          />)
      }
    </div >
  );
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    topFilter: state.sorting.sorting
  }
}

TopFilter.defaultProps = {
  topFilter: [],
};

TopFilter.propTypes = {
  topFilter: PropTypes.arrayOf(PropTypes.object),
};



export default connect(mapStateToProps, null)(TopFilter);