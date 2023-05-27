import { BookAction } from '../actions/read'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_READ':
      return payload
    case 'ADD_RATING':
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
