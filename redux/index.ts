import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { SearchReducer } from './search';

export const store = configureStore({
  reducer: combineReducers({
    search: SearchReducer
  }),
  preloadedState: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatchAsync = () => useDispatch<AppDispatch>();