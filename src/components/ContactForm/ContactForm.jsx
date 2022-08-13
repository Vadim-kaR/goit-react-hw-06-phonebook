// import PropTypes from 'prop-types';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { Box } from 'components/Box/Box';
import { InputTitle, InputField, AddBtn } from './ContactForm.styled';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, getContacts } from 'redux/slice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  let schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'name may contain only letters'
      ),
    number: yup
      .string()
      .required()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number is not valid'
      ),
  });

  const handelContactSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    console.log(newContact);

    const alreadyName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handelContactSubmit}
      >
        <Form autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p="l"
          >
            <InputField htmlFor="name">
              <InputTitle>Name</InputTitle>
              <Field type="text" name="name" />
              <ErrorMessage component="div" name="name" />
            </InputField>
            <InputField htmlFor="number">
              <InputTitle>Phone</InputTitle>
              <Field type="tel" name="number" />
              <ErrorMessage component="div" name="number" />
            </InputField>
            <AddBtn type="submit">Add Contact</AddBtn>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export { ContactForm };
