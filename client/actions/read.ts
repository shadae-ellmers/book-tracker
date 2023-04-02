import type { ThunkAction } from '../store'
import { Read, ReadInfo } from '../../common/Read'
import { getBooks } from '../apis/apiRead'
import { setError } from './error'

export type ReadAction = { type: 'SET_READ'; payload: Read[] }

export function showRead(setRead: Read[]): ReadAction {
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
