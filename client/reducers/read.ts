import { BookAction } from '../actions/read'
import { Book } from '../../common/Book'

export default function (
  state = [] as Book[],
  { type, payload }: BookAction
): Book[] {
  switch (type) {
    case 'SET_READ':
      return payload
    case 'ADD_RATING':
      return state.map((user) => {
        if (user.id === payload.id) {
          return { ...user, ...payload }
        }
        return user
      })
    default:
      return state
  }
}
