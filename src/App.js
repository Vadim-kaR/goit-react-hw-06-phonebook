import { useState } from 'react';
import { ContactsList } from 'components/ContatsList/ContacstsList';
import { ContactForm } from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactsTitle } from 'components/ContactsTitle/ContactsTitle';
import { Box } from 'components/Box/Box';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const getFiltredContact = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  const setFilterName = e => {
    setFilter(e.currentTarget.value);
  };

  const handelContactSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const alreadyName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts([newContact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <>
      <Box pt="l" display="flex" justifyContent="center">
        <Box
          width="400px"
          height="400px"
          p="l"
          bg="accent"
          flexDirection="column"
          display="flex"
          alignItems="center"
          overflow="hidden"
        >
          <h1>PhoneBook</h1>
          <ContactForm onSubmit={handelContactSubmit} />
          <ContactsTitle />
          <Filter getName={setFilterName} value={filter} />
          <ContactsList data={getFiltredContact()} onDelete={deleteContact} />
        </Box>
      </Box>
    </>
  );
}

export { App };
