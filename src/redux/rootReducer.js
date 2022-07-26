import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import phoneBookSlice from './phoneBook/phoneBookSlice';
import authSlice from './auth/authSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  contacts: phoneBookSlice,
  auth: persistedAuthReducer,
});

export default rootReducer;
