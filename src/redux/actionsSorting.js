import { SORT_FILTER } from './type'

export default function ticketsSort(id, active) {
  return {
    type: SORT_FILTER,
    payload: {
      id,
      active
    }
  }
}
