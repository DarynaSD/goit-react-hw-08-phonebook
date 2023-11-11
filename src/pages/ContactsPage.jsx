import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/thunks';
//import { selectLoading } from 'redux/contacts/selectors';

import Form from 'components/Form';
import ContactList from 'components/ContactList';
//import { Loader } from 'components/Loader';
import { FormWrapper, ListWrapper, Section } from 'components/styled/Parts.styled';
import Filter from 'components/Filter';

export default function Tasks() {
  const dispatch = useDispatch();
  //const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <>
  <Section>
    <FormWrapper>
      <Form />
    </FormWrapper>
    <ListWrapper>
      <Filter />
      <ContactList />
    </ListWrapper>
  </Section>
    </>
  );
}
