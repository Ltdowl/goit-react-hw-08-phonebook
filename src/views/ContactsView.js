import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { toast } from 'react-toastify';


export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const formSubmitHandler = async data => {
    const existedContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (!existedContact) {
      contactsOperations.addContact(data);
      toast.success('Contact is successfully added.');
    } else {
      toast.error(`User ${data.name} already exists`);
    }
  };

  return (
    <>
      <Container className="pt-5">
        <Row className="mx-auto mt-5 justify-content-md-center">
          <Col xs="auto" md={8} xl={7} className="p-3">
            <h2>Contacts</h2>
            <Filter />

            <ContactList />
          </Col>

          <Card
            as={Col}
            xs="auto"
            sm={6}
            md={4}
            lg={3}
            bg="light"
            className="p-3"
          >
            <h2>Phonebook</h2>
            <ContactForm onSubmit={formSubmitHandler} />
          </Card>
        </Row>
       
      </Container>
    </>
  );
}
