import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setContacts, setFilter } from './actions';

const contactsInitial = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitial, {
  [addContact]: (state, action) => {
    if (state.map(contact => contact.name).includes(action.payload.name)) {
      // alert to funkcja!!!
      alert(`${action.payload.name} is already in contacts.`);
      return state;
    } else {
      return [...state, action.payload];
    }
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [setContacts]: (state, action) => {
    return action.payload;
  },
});

const filterInitial = '';
export const filterReducer = createReducer(filterInitial, {
  //setFilter-nazwa akcji
  [setFilter]: (state, action) => {
    return action.payload;
  },
});

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filtersReducer,
// });
