import { TRANSFER_FILTER } from './type'


export default function transferFilter(tranferNum) {
  return {
    type: TRANSFER_FILTER,
    payload: tranferNum
  }
}
