import React from 'react';

import ContactItem from './ContactItem';
import { List } from './styled/Parts.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const filtered = useSelector(selectVisibleContacts);

  return (
    <div>
      <List>
        {filtered.map(oneCont => (
          <ContactItem item={oneCont} key={oneCont.id} />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
