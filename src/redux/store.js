import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slice';
import { persistStore } from 'redux-persist';

import { defaultMiddleware } from './defaultMiddleware';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: defaultMiddleware,
});

export const persistor = persistStore(store);
