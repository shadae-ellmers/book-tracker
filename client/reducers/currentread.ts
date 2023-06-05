import { BookAction } from '../actions/currentread'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_CURRENTREAD':
      return payload
    case 'SAVE_ONE_CURRENT':
      return state.map((book) => {
        if (book.id === payload.id) {
          return { ...book, ...payload }
        }
        return book
      })
    default:
      return state
  }
}
