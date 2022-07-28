import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';
import { changeFilter } from './contacts-actions';

const {fetchContacts, addContact, deleteContact } = contactsOperations;

const initialState = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.loading = false;
    },
    [fetchContacts.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.loading = false;
    },
    [addContact.pending](state) {
        state.loading = true;
        state.error = null;
    },
    [addContact.rejected](state, { payload }) {
        state.loading = false;
        state.error = payload;
    },
    [deleteContact.fulfilled](state, { payload }) {
        state.items = payload;
        state.loading = false;
    },
    [deleteContact.pending](state) {
        state.loading = true;
        state.error = null;
    },
    [deleteContact.rejected](state, { payload }) {
        state.loading = false;
        state.error = payload;
    },
    [changeFilter](state, { payload }) {
      state.filter = payload;
    },
  },
});

export default contactsSlice.reducer;