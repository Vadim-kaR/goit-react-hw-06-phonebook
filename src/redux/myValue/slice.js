import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    filterName(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// selectors
export const getContacts = state => state.contacts.items;
export const geFilterName = state => state.contacts.filter;

export const { add, remove, filterName } = contactsSlice.actions;
