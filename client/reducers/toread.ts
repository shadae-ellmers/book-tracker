import { BookAction } from '../actions/toread'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_TOREAD':
      return payload
    default:
      return state
  }
}
