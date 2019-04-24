import { combineReducers } from 'redux-immutable';
import { authReducer } from './pages/LoginPage/reducer';
import { walletReducer } from './pages/MainPage/reducer';


const reducers = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});

export default reducers;
