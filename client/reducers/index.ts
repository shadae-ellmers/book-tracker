import { combineReducers } from 'redux'

import read from './read'
import error from './error'
import google from './google'
import toread from './toread'
import currentread from './currentread'

export default combineReducers({
  read,
  error,
  google,
  toread,
  currentread,
})
