import axios from 'axios';
import token from '../../services/token-api';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = async () => {
  const { data } = await axios.get(`/contacts`, token);
  return data;
};

async function addContact(data) {
  const {name, number} = data;
    const response = await axios
    .post('/contacts', {
      name,
      number,
    },
    token);
    return response.data;
}

const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.status; 
};

const contactsApi = {
  getContacts,
  addContact,
  deleteContact
}

export default contactsApi;