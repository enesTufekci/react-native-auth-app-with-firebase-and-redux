import { combineReducers } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import authReducer from 'src/auth/authReducer';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


const rootReducer = combineReducers({
  nav: navReducer,
  auth: authReducer
});

export default rootReducer; 