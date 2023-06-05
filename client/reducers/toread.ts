import { BookAction } from '../actions/toread'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_TOREAD':
      return payload
    case 'DEL_TOREAD':
      return state.filter((book) => book.id !== payload)
    default:
      return state
  }
}
