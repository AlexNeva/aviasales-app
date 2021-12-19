/* eslint-disable import/prefer-default-export */
import TicketsService from '../API/TicketsService'

import {
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_ERROR,
  SORT_BY,
} from './type'

const ticketsService = new TicketsService()


export function fetchTicketsStart() {
  return {
    type: FETCH_TICKETS_START,

  }
}

export function fetchTicketsSuccess(tickets, stop) {
  return {
    type: FETCH_TICKETS_SUCCESS,
    payload: {
      tickets,
      stop
    }
  }
}

export function fetchTicketsError(error) {
  return {
    type: FETCH_TICKETS_ERROR,
    payload: {
      error
    }
  }
}

export function fetchTickets(id) {
  return async dispatch => {
    dispatch(fetchTicketsStart())
    try {

      const res = await ticketsService.getTickets(id)

      console.log(res);

      dispatch(fetchTicketsSuccess(res.tickets, res.stop))
    } catch (error) {
      console.log(error);
      dispatch(fetchTicketsError(error))
    }


  }
}

export function sortBy(id = 'lowPrice') {
  return {
    type: SORT_BY,
    payload: {
      id
    }
  }
}



