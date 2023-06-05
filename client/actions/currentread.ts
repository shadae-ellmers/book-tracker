import type { ThunkAction } from '../store'
import { Book, BookInfo } from '../../common/Book'
import { setError } from './error'
import {
  deleteACurrent,
  getCurrentReadBooks,
  postOneCurrent,
} from '../apis/currentreadApi'

export type BookAction =
  | { type: 'SET_CURRENTREAD'; payload: Book[] }
  | { type: 'SAVE_ONE_CURRENT'; payload: Book }
  | { type: 'DEL_CURRENT'; payload: number }

export function showCurrentRead(setToRead: Book[]): BookAction {
  return {
    type: 'SET_CURRENTREAD',
    payload: setToRead,
  }
}

export function saveOneCurrent(book: Book): BookAction {
  return {
    type: 'SAVE_ONE_CURRENT',
    payload: book,
  }
}

export function delCurrent(id: number): BookAction {
  return {
    type: 'DEL_CURRENT',
    payload: id,
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

export function addToCurrent(book: BookInfo): ThunkAction {
  return (dispatch) => {
    return postOneCurrent(book)
      .then((book) => {
        dispatch(saveOneCurrent(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function delCurrentThunk(id: number): ThunkAction {
  return (dispatch) => {
    return deleteACurrent(id)
      .then(() => {
        dispatch(delCurrent(id))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
