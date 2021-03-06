/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import { SORT_FILTER } from './type'

const initialState = {
  sorting: [
    { id: 'lowPrice', title: 'Самый дешевый', active: true },
    { id: 'moreQuickly', title: 'Самый быстрый', active: false },
    { id: 'optimum', title: 'Оптимальный', active: false },
  ]
}

export const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_FILTER:

      return {
        ...state,
        sorting: state.sorting.map(item => item.id === action.payload.id
          ? { ...item, active: true }
          : { ...item, active: false }
        )
      }

    default:
      return state
  }
}