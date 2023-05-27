import type { ThunkAction } from '../store'
import { Book, BookInfo } from '../../common/Book'
import { getBooks } from '../apis/booksApi'
import { setError } from './error'

export type BookAction =
  | { type: 'SET_READ'; payload: Book[] }
  | { type: 'ADD_RATING'; payload: Book }

export function showRead(setRead: Book[]): BookAction {
  return {
    type: 'SET_READ',
    payload: setRead,
  }
}

export function addRating(user: Book): BookAction {
  return {
    type: 'ADD_RATING',
    payload: user,
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

export function addRatingThunk(user: Book): ThunkAction {
  return (dispatch) => {
    return addRating(user)
      .then(() => {
        dispatch(addRating(user))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
