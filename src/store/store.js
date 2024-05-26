import { configureStore, combineReducers } from '@reduxjs/toolkit';
import orgEntityReducer from './reducers/orgEntityReducer';

const orgReducer = combineReducers({
  orgInfo: orgEntityReducer,
});

export const store = configureStore({
  reducer: orgReducer,
});
