import firebase, { auth } from 'firebase';

export const AUTH = 'AUTH';

export const handleAuth = (user) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type : AUTH,
          payload : user ? { email: user.email, token: user.apiKey } : null
        })
        resolve()
      }, 200)
    })
  }
   
}


export const actions = {
  handleAuth
}

const ACTION_HANDLERS = {
  [AUTH] : (state, action) => ({...state, user : action.payload }),
}

let initialState = {
  user : null
}

export default function authReducer(state = initialState, action) {
  let handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}