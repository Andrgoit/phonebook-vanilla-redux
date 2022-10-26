export const getContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  let normalizeFilter = filter.toLowerCase();
  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  return filteredContacts;
};

// export const getFilter= store=> store.filter
//деструктуризируем store
export const getFilter = ({ filter }) => filter;
