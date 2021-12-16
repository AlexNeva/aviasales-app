/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */

import { TRANSFER_FILTER } from './type'

const initialState = {

  filters: [
    { transfer: 'all', checked: false, title: 'Все' },
    { transfer: '0', checked: false, title: 'Без пересадок' },
    { transfer: '1', checked: false, title: '1 пересадка' },
    { transfer: '2', checked: false, title: '2 пересадки' },
    { transfer: '3', checked: false, title: '3 пересадки' },
  ]
}

// action.payload === filter.transfer
//   ? { ...filter, checked: !filter.checked }
//   : { ...filter, checked: filter.checked }

// ...state, filters: state.filters
//   .map(filter => {
//     if (action.payload === filter.transfer) {
//       return { ...filter, checked: !filter.checked }
//     }
//     return filter
//   })

// if (action.payload === 'all') {
//   return {
//     ...state, filters: state.filters
//       .map(filter => ({ ...filter, checked: true }))
//   }
// }


export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_FILTER:

      if (action.payload.transferId === 'all') {
        const checkedAll = state.filters.find(filter => filter.transfer === 'all');


        return {
          ...state,
          filters: state.filters.map(filter => ({ ...filter, checked: !checkedAll.checked }))
        }
      }

      return {
        ...state,
        filters: state.filters.map(filter => {
          if (action.payload.transferId === filter.transfer) {

            return {
              ...filter,
              checked: !filter.checked
            }
          }
          if (action.payload.checkedCount === 3) {
            return filter.transfer === 'all'
              ? {
                ...filter,
                checked: !filter.checked
              }
              : filter
          }

          return filter
        })
      }



    default:
      return state
  }
}
