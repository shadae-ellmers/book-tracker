import type { ThunkAction } from '../store'
import { Book, BookInfo } from '../../common/Book'
import { getBooks } from '../apis/booksApi'
import { setError } from './error'

export type BookAction = { type: 'SET_READ'; payload: Book[] }

export function showRead(setRead: Book[]): BookAction {
  return {
    type: 'SET_READ',
    payload: setRead,
  }
}

export function fetchRead(): ThunkAction {
  return (dispatch) => {
    return getBooks()
      .then((book) => {
        dispatch(showRead(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
