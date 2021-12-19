/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */

import {
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_ERROR,
  SORT_BY,
} from './type'




const initialState = {
  tickets: [],
  loading: false,
  error: false,
}

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_START:
      return {
        ...state, loading: true
      }

    case FETCH_TICKETS_SUCCESS:
      return {
        ...state, loading: false, tickets: [...state.tickets, ...action.payload.tickets], stop: action.payload.stop
      }

    case FETCH_TICKETS_ERROR:
      return {
        ...state, loading: false,
        error: true
      }

    case SORT_BY:

      if (action.payload.id === 'lowPrice') {
        return {
          ...state,
          tickets: [...state.tickets.sort((prev, next) => prev.price - next.price)]
        }
      }
      if (action.payload.id === 'moreQuickly') {
        return {
          ...state,
          tickets: [...state.tickets.sort((prev, next) => (
            (+prev.segments[0].duration + +prev.segments[1].duration) - (+next.segments[0].duration + +next.segments[1].duration)
          ))]
        }
      }
      return {
        ...state,
        tickets: [...state.tickets.sort((prev, next) => (
          prev.price * (+prev.segments[0].duration + +prev.segments[1].duration) * (+prev.segments[0].stops.length + +prev.segments[1].stops.length)
          - prev.price * (+next.segments[0].duration + +next.segments[1].duration) * (+next.segments[0].stops.length + +next.segments[1].stops.length)
        ))]
      }

    // return {
    //   ...state,
    //   tickets: [...state.tickets.sort((prev, next) => prev.price - next.price)]
    // }


    default:
      return state
  }
}