import type { ThunkAction } from '../store'
import { Book, BookInfo } from '../../common/Book'
import { setError } from './error'
import { getCurrentReadBooks, postOneCurrent } from '../apis/currentreadApi'

export type BookAction =
  | { type: 'SET_CURRENTREAD'; payload: Book[] }
  | { type: 'SAVE_ONE_CURRENT'; payload: Book }

export function showCurrentRead(setToRead: Book[]): BookAction {
  return {
    type: 'SET_CURRENTREAD',
    payload: setToRead,
  }
}

export function saveOneCurrent(book: Book) {
  return {
    type: 'SAVE_ONE_CURRENT',
    payload: book,
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
        console.log('hi')
        dispatch(saveOneCurrent(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
