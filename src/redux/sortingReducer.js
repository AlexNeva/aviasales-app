/* eslint-disable default-param-last */
import { SORT_FILTER } from './type'

const initialState = {
  sorting: [
    { id: 'lowPrice', title: 'Самый дешевый', active: true },
    { id: 'moreQuickly', title: 'Самый быстрый', active: false },
    { id: 'optimum', title: 'Оптимальный', active: false },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_FILTER:
      return state

    default:
      return state
  }
}