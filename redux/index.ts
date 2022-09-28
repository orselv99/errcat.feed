import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { FeedReducer } from './feed';
import { SearchReducer } from './search';

export const store = configureStore({
  reducer: combineReducers({
    feed: FeedReducer,
    search: SearchReducer
  }),
  preloadedState: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatchAsync = () => useDispatch<AppDispatch>();