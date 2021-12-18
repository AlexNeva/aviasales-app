/* eslint-disable import/prefer-default-export */
import { TRANSFER_FILTER } from './type'


export function transferFilter(transferId, checked, role = null) {
  return {
    type: TRANSFER_FILTER,
    payload: {
      transferId,
      checked,
      role
    }
  }
}
