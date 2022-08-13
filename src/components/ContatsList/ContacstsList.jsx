import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { ContactItem, ContactText } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getContacts, getFilterName } from 'redux/slice';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterName);
  const contacts = useSelector(getContacts);

  const getFiltredContact = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  const data = getFiltredContact();

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <Box pt="l" pb="l">
      <ul>
        {data.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactText>
              {name}: {number}
            </ContactText>
            <button onClick={() => deleteContact(id)}>Delete</button>
          </ContactItem>
        ))}
      </ul>
    </Box>
  );
};

ContactsList.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export { ContactsList };
