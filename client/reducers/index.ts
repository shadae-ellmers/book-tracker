import { combineReducers } from 'redux'

import read from './read'
import error from './error'
import google from './google'

export default combineReducers({
  read,
  error,
  google,
})
