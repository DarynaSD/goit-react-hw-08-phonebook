import React from 'react';

import { ContactName, ContactNumber, DeleteBtn } from './styled/Parts.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/thunks';


const ContactItem = ({ item }) => {
  // const [idItem] = useState([item].id)
  const dispatch = useDispatch();
  // delete
  const handleDelete = itemId => {
    dispatch(deleteContacts(itemId));
  };

  return (
    <li style={{ marginBottom: 20 }}>
      <ContactName>{item.name}</ContactName>
      <ContactNumber>{item.number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => handleDelete(item.id)}>
        ✖ Delete
      </DeleteBtn>
    </li>
  );
};

export default ContactItem;
