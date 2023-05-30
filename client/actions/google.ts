import { ThunkAction } from '../store'
import { GoogleBook, BookInfo } from '../../common/Book'
import { searchForBook } from '../apis/googleApi'
import { postOneBook } from '../apis/readApi'
import { setError } from './error'
import { postOneToReadBook } from '../apis/toreadApi'

export const GOOGLE_DATA = 'GOOGLE_DATA'
export const SAVE_ONE_BOOK = 'SAVE_ONE_BOOK'
export const SAVE_ONE_TOREAD = 'SAVE_ONE_TOREAD'

export function setBooks(googleBooks: GoogleBook[]) {
  return {
    type: GOOGLE_DATA,
    payload: googleBooks,
  }
}

export function saveOneBook(googleBook: GoogleBook) {
  return {
    type: SAVE_ONE_BOOK,
    payload: googleBook,
  }
}

export function saveOneToRead(googleBook: GoogleBook) {
  return {
    type: SAVE_ONE_TOREAD,
    payload: googleBook,
  }
}

export function searchBooksThunk(book: string): ThunkAction {
  return (dispatch) => {
    return searchForBook(book)
      .then((result) => {
        dispatch(setBooks(result))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function addBookThunk(book: BookInfo): ThunkAction {
  return (dispatch) => {
    return postOneBook(book)
      .then((book) => {
        dispatch(saveOneBook(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function addToReadThunk(book: BookInfo): ThunkAction {
  return (dispatch) => {
    return postOneToReadBook(book)
      .then((book) => {
        dispatch(saveOneToRead(book))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
