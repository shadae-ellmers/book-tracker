import { ErrorAction } from '../actions/error'

export default function (state = '', { type, payload }: ErrorAction): string {
  switch (type) {
    case 'SET_ERROR':
      return payload
    default:
      return state
  }
}
