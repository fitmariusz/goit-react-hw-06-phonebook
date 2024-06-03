import { createSlice, nanoid } from '@reduxjs/toolkit';
import { loadState } from './editLocalstore';


const persistedState = loadState();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: persistedState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const { name, number } = action.payload;
        const isExist = state.contacts.some(
          contact => contact.name.toLowerCase() === name.trim().toLowerCase()
        );
        if (isExist) {
          alert(`${name} is already in contacts!`);
        } else {
          state.contacts.push({ id: nanoid(), name, number });
          localStorage.setItem("contacts", JSON.stringify(state.contacts));
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id:nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    filterContact(state, action) {
      state.filter=action.payload;
    },
    
  },
});

export const { addContact, deleteContact, filterContact} = contactsSlice.actions;
export const contactsReducer=contactsSlice.reducer;