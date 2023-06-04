import type { ThunkAction } from '../store'
import { Book } from '../../common/Book'
import { setError } from './error'
import { getCurrentReadBooks } from '../apis/currentreadApi'

export type BookAction = { type: 'SET_CURRENTREAD'; payload: Book[] }

export function showCurrentRead(setToRead: Book[]): BookAction {
  return {
    type: 'SET_CURRENTREAD',
    payload: setToRead,
  }
}

export function fetchCurrentRead(): ThunkAction {
  return (dispatch) => {
    return getCurrentReadBooks()
      .then((book) => {
        dispatch(showCurrentRead(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
