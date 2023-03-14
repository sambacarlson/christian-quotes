import {configureStore} from '@reduxjs/toolkit';
import uiReducer from '../slices/uiControlSlice';
import quoteReducer from '../slices/quoteControlSlice';

const store = configureStore({
  reducer: {
    uiControls: uiReducer,
    quoteControls: quoteReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
