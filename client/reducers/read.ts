import { BookAction } from '../actions/read'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_READ':
      return payload
    case 'SAVE_ONE_READ':
      return state.map((book) => {
        if (book.id === payload.id) {
          return { ...book, ...payload }
        }
        return book
      })
    case 'ADD_RATING':
      return state.map((book) => {
        if (book.id === payload.id) {
          return { ...book, ...payload }
        }
        return book
      })
    case 'DEL_READ':
      return state.filter((book) => book.id !== payload)
    default:
      return state
  }
}
