import { BookAction } from '../actions/currentread'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_CURRENTREAD':
      return payload
    default:
      return state
  }
}
