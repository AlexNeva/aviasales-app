/* eslint-disable import/prefer-default-export */
import { TRANSFER_FILTER } from './type'


export function transferFilter(transferId, checkedCount) {
  return {
    type: TRANSFER_FILTER,
    payload: {
      transferId,
      checkedCount
    }
  }
}
