import { combineReducers } from 'redux'
import { Action } from './actions'
import { User } from '../../models/User.model';
// States' definition
export interface AccessToken {
  isFetching: boolean
  isError: boolean
  isLoggedIn: boolean
  message: string
  accessToken?: string
  user?: User
}
export interface State {
  sessionObject: AccessToken
}
const sessionObject = (state: AccessToken = { isFetching: false, isError: false, isLoggedIn: false, message: '' }, action: Action): AccessToken => {
  switch (action.type) {
  case 'SET_USER':
      return { ...state, user: action.user, accessToken: action.accessToken, isLoggedIn: action.logged }
  case 'SET_FETCHING':
    return { ...state, isFetching: action.isFetching, isError: action.isError, message: action.message }
  default:
    return state;
  }
  
}
export default combineReducers<State>({
  sessionObject
})