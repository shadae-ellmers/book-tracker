import { GoogleBook } from '../../common/Book'
import { GOOGLE_DATA } from '../actions/google'

export type GoogleAction = { type: string; payload: GoogleBook }

const initialState = [] as GoogleBook[]

export default function googleReducer(
  state = initialState,
  action: GoogleAction
) {
  const { type, payload } = action
  switch (type) {
    case GOOGLE_DATA:
      return payload
    default:
      return state
  }
}
