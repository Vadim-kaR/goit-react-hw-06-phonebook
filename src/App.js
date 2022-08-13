import { ContactsList } from 'components/ContatsList/ContacstsList';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsTitle } from 'components/ContactsTitle/ContactsTitle';
import { Box } from 'components/Box/Box';

function App() {
  return (
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
        <ContactForm />
        <ContactsTitle />
        <Filter />
        <ContactsList />
      </Box>
    </Box>
  );
}

export { App };
