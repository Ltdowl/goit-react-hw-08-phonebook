import { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`🤔 ${name} is already in the phonebook.`);
    } else {
      toast(`😊 ${name} creted`);
      dispatch(contactsOperations.addContact({name, number}));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor={nameInputId}>Name</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameInputId}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor={numberInputId}>Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberInputId}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => {
      dispatch(contactsOperations.addContact(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
