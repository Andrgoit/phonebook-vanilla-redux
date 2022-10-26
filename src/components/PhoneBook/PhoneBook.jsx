import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, setFilter } from 'redux/actions';
import { getFilter, getFilteredContacts } from 'redux/selectors';
//end redux

import PhoneBookSection from './PhoneBookSection/PhoneBookSection';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import { StyledMain, StyledContainer } from './PhoneBook.styled';

const PhoneBook = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const addContacts = payload => {
    const checkForDublicate = contacts.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase()
    );

    if (checkForDublicate) {
      return toast.info(`${payload.name} is already in contacts`);
    }
    const action = addContact(payload);
    dispatch(action);
  };

  const deleteContacts = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const searchContact = event => {
    const { value } = event.target;

    const action = setFilter(value);
    dispatch(action);
    setFilter(value);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <StyledMain>
        <StyledContainer>
          <PhoneBookSection title="Phonebook">
            <ContactForm onSubmit={addContacts} />
          </PhoneBookSection>
          <>
            <PhoneBookSection title="Search...">
              <Filter onChange={searchContact} filter={filter} />
            </PhoneBookSection>
            <PhoneBookSection title="Contacts">
              <Contacts contacts={contacts} onClick={deleteContacts} />
            </PhoneBookSection>
          </>
        </StyledContainer>
      </StyledMain>
    </>
  );
};

export default PhoneBook;
