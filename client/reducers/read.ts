import { BookAction } from '../actions/read'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_READ':
      return payload
    default:
      return state
  }
}
