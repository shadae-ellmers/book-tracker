import type { ThunkAction } from '../store'
import { Book } from '../../common/Book'
import { setError } from './error'
import { getToReadBooks } from '../apis/toreadApi'
import { deleteACurrent } from '../apis/currentreadApi'

export type BookAction =
  | { type: 'SET_TOREAD'; payload: Book[] }
  | { type: 'DEL_TOREAD'; payload: number }

export function showToRead(setToRead: Book[]): BookAction {
  return {
    type: 'SET_TOREAD',
    payload: setToRead,
  }
}

export function delToRead(id: number): BookAction {
  return {
    type: 'DEL_TOREAD',
    payload: id,
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

export function delToReadThunk(id: number): ThunkAction {
  return (dispatch) => {
    return deleteACurrent(id)
      .then(() => {
        dispatch(delToRead(id))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
