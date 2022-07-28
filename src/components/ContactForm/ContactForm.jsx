import { useState } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { contactsOperations } from '../../redux/contacts';
import { Form, Button } from 'react-bootstrap';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

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
    onSubmit({ name, number });
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

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
      dispatch(contactsOperations.addContact(data))
    },
  }
};

export default connect(null, mapDispatchToProps)(ContactForm);