import { ReadAction } from '../actions/read'
import { Read, ReadInfo } from '../../common/Read'

export default function (
  state = [] as Read[],
  { type, payload }: ReadAction
): Read[] {
  switch (type) {
    case 'SET_READ':
      return payload
    default:
      return state
  }
}
