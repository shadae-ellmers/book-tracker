import { combineReducers } from 'redux'

import read from './read'
import error from './error'

export default combineReducers({
  read,
  error,
})
