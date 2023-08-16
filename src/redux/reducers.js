import { combineReducers } from 'redux';

const contactsInitial = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = contactsInitial, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      console.log(state);
      if (state.map(contact => contact.name).includes(action.payload.name)) {
        // alert to funkcja!!!
        alert(`${action.payload.name} is already in contacts.`);
        return state;
      } else {
        return [...state, action.payload];
      }
    case 'contacts/DELETE':
      return state.filter(contact => contact.id !== action.payload);
    case 'contacts/SET':
      return action.payload;
    default:
      return state;
  }
};

const filtersInitial = '';
const filtersReducer = (state = filtersInitial, action) => {
  switch (action.type) {
    case 'filters/SET':
      return action.payload;
    default:
      return state;
  }
};

//robimy sobie taki initial state
export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
