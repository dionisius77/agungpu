import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from './authentication/auth.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'account']
};

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default persistReducer(persistConfig, rootReducer);
