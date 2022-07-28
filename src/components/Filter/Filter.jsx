import { nanoid } from "nanoid";
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts';
import { Form } from 'react-bootstrap';

const filterinputId = nanoid();

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
      const value = e.target.value;
      dispatch(changeFilter(value));
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={filterinputId}>Find by Name</Form.Label>
            <Form.Control 
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={filterinputId}
                onChange={handleChange}
                required />
        </Form.Group>
    )
}

export default Filter;