
import { useAuth } from 'hooks/useAuth';
import { MenuLink } from './styled/Parts.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav style={{ marginBottom: 40 }}>
      <MenuLink to="/">Home</MenuLink>
      {isLoggedIn && <MenuLink to="/contacts">Contacts</MenuLink>}
    </nav>
  );
};
