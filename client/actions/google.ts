import { ThunkAction } from '../store'
import { GoogleBook, BookInfo } from '../../common/Book'
import { searchForBook } from '../apis/googleApi'
import { postOneBook } from '../apis/booksApi'
import { setError } from './error'

export const GOOGLE_DATA = 'GOOGLE_DATA'
export const SAVE_ONE_BOOK = 'SAVE_ONE_BOOK'

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
