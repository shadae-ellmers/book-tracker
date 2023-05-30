import type { ThunkAction } from '../store'
import { Book } from '../../common/Book'
import { getToReadBooks } from '../apis/booksApi'
import { setError } from './error'

export type BookAction = { type: 'SET_TOREAD'; payload: Book[] }

export function showToRead(setToRead: Book[]): BookAction {
  return {
    type: 'SET_TOREAD',
    payload: setToRead,
  }
}

export function fetchToRead(): ThunkAction {
  return (dispatch) => {
    return getToReadBooks()
      .then((book) => {
        dispatch(showToRead(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
