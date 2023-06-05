import type { ThunkAction } from '../store'
import { Book } from '../../common/Book'
import { getBooks, addARating, deleteARead } from '../apis/readApi'
import { setError } from './error'

export type BookAction =
  | { type: 'SET_READ'; payload: Book[] }
  | { type: 'ADD_RATING'; payload: Book }
  | { type: 'DEL_READ'; payload: number }

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

export function delRead(id: number): BookAction {
  return {
    type: 'DEL_READ',
    payload: id,
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

export function addRatingThunk(book: Book): ThunkAction {
  return (dispatch) => {
    return addARating(book)
      .then(() => {
        dispatch(addRating(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function delReadThunk(id: number): ThunkAction {
  return (dispatch) => {
    return deleteARead(id)
      .then(() => {
        dispatch(delRead(id))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
