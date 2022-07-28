import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import { Button} from 'react-bootstrap';
import { toast } from 'react-toastify';

const ContactItem = ({contact}) => {
    const {id, name, number} = contact;
    const isLoadingContacts = useSelector(contactsSelectors.getLoading);

    const dispatch = useDispatch(); 
    const deleteContact = id => {
        dispatch(contactsOperations.deleteContact(id),
        toast.success('Contact deleted.'))
    };
    
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
                <Button onClick={() => deleteContact(id)} disabled={isLoadingContacts}>
                    Delete
              </Button>
            </td>
        </tr>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string, 
    number: PropTypes.string,
    id: PropTypes.string,
}


export default ContactItem;