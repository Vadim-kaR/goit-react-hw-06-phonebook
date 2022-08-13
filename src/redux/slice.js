import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    filterByContactName(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export default persistReducer(persistConfig, contacts.reducer);

// selectors
export const getContacts = state => state.contacts.items;
export const getFilterName = state => state.contacts.filter;

export const { addContact, removeContact, filterByContactName } =
  contacts.actions;
