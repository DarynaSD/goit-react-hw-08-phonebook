import React, { lazy, useEffect } from 'react';
// import Form from './Form';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { Section, FormWrapper, ListWrapper } from './styled/Parts.styled';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/thunks';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/HomePage';
import RestrictedRoute from 'guards/RestrictedRoute';
import PrivateRoute from 'guards/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

// const App = () => {
//     return (
//     <Section>
//       <FormWrapper>
//         <Form />
//       </FormWrapper>
//       <ListWrapper>
//         <Filter />
//         <ContactList />
//       </ListWrapper>
//     </Section>
//   );
// };

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
  );
}

export default App;
