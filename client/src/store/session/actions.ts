import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { User } from '../../models/User.model';

// Action Definition
export interface SetFetcing {
  type: 'SET_FETCHING'
  isFetching: boolean
  isError: boolean
  message: string
}
export interface SetUser {
  type: 'SET_USER'
  user: User
  accessToken: string
  logged: boolean
}
// Union Action Types
export type Action = SetFetcing | SetUser
// Action Creators
export const setUser = (user: User, accessToken:string, logged: boolean): SetUser => {
  return { type: 'SET_USER', user, accessToken, logged }
}
export const isFetching = (isFetching: boolean, isError: boolean, message: string): SetFetcing => {
  return { type: 'SET_FETCHING', isFetching, isError, message }
}
export const login = (email: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true, false, ''));
      
      fetch('http://localhost:3001/session', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(
        (response) => {
          if(response.status === 200) {
            response.json().then(json => {
              dispatch(setUser(json.user, json.session.accessToken, true));
              dispatch(isFetching(false, false, "LoggedIn Successfully."));
              resolve();
            });
          } else {
            dispatch(isFetching(false, true, response.statusText));
            resolve();
          }
        }
      );
    })
  }
}
