/* eslint-disable no-unused-vars */




/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { fetchTickets } from '../../redux/actionsTickets';
import TicketsService from '../../API/TicketsService';
import MoreBtn from '../MoreBtn/MoreBtn';


import Card from '../Card/Card';

function CardsSection({ getTickets, tickets, stopSearch, sideFilter, error }) {

  console.log(error);

  const endSearchPoint = 10000;

  const errorColor = error ? 'red' : '#2196F3'




  const filterIds = sideFilter.filter(filter => filter.checked && filter.transfer !== 'all')

  console.log(tickets.length);

  const [searchId, setSearchId] = useState('')
  const [btnState, setBtnState] = useState({
    title: 5,
    counter: 5,
    sub: 5,
  })

  console.log(btnState.counter);

  const changeResultCounter = (num) => {
    setBtnState({
      ...btnState,
      counter: btnState.counter + num
    })
  }



  const getFilteredTickets = (term, count) => {
    // if (count >= tickets.length) {
    //   getTickets(searchId)
    // }
    if (term === 'all') {
      return tickets
    }
    return tickets.filter(ticket => ticket.segments.find(segment => segment.stops.length === +term))
  }



  const ticketsService = new TicketsService();



  useEffect(() => {
    ticketsService.getSearchId()
      .then(data => {
        setSearchId(data.searchId)
        console.log(data.searchId);

        getTickets(data.searchId)
      })
      .catch((err) => err)
  }, [])

  useEffect(() => {
    getTickets(searchId)

  }, [tickets.length])






  return (
    <div className='card-section'>
      <Progress
        percent={
          stopSearch ? 100 : tickets.length / endSearchPoint * 100
        }
        status="exception"
        strokeColor={errorColor}
        showInfo={false}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          transition: 'width 0,3s'
        }}
      />

      {filterIds.length
        ? getFilteredTickets(filterIds[0].transfer, btnState.counter)
          .filter((ticket, index) => index < btnState.counter)
          .map(ticket =>

            <Card
              key={uniqid()}
              price={ticket.price}
              logoId={ticket.carrier}
              segments={ticket.segments}
            />
          )



        : 'Нет подходящих билетов'

      }

      {
        tickets.length && filterIds.length
          ? <MoreBtn
            title={btnState.title}
            sub={btnState.sub}
            changeResultCounter={changeResultCounter}
          />
          : null
      }


    </div>
  );
}


CardsSection.defaultProps = {
  tickets: [],
  getTickets: () => { },
  stopSearch: false,
  sideFilter: [],
  error: false
};

CardsSection.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  getTickets: PropTypes.func,
  stopSearch: PropTypes.bool,
  sideFilter: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  stopSearch: state.tickets.stop,
  sideFilter: state.filters.filters,
  error: state.tickets.error

})

const mapDispatchToProps = {

  getTickets: fetchTickets,
}


export default connect(mapStateToProps, mapDispatchToProps)(CardsSection);