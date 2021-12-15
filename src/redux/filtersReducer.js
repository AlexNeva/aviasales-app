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

export default (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_FILTER:
      return state
    default:
      return state
  }
}