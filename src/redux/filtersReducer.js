/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */

import { TRANSFER_FILTER } from './type'

const initialState = {
  filters: [
    { transfer: 'all', checked: false, title: 'Все', role: 'main' },
    { transfer: '0', checked: false, title: 'Без пересадок', role: null },
    { transfer: '1', checked: false, title: '1 пересадка', role: null },
    { transfer: '2', checked: false, title: '2 пересадки', role: null },
    { transfer: '3', checked: false, title: '3 пересадки', role: null },
  ]
}



export const filtersReducer = (state = initialState, action) => {

  switch (action.type) {
    case TRANSFER_FILTER: {

      if (action.payload.role === 'main') {
        return {
          ...state,
          filters: state.filters.map(filter => ({ ...filter, checked: action.payload.checked }))
        }
      }

      return {
        ...state,
        filters: state.filters.map(filter =>
          action.payload.transferId === filter.transfer
            ? { ...filter, checked: action.payload.checked }
            : filter
        )
      }

    }

    default:
      return state
  }
}
