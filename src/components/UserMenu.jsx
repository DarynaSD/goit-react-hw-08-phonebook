import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunks';
import { Button, LogoutWrap } from './styled/Parts.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <LogoutWrap>
      <p>{user.email}</p>
      <Button
        type="button" style={{width: 200, marginRight: 140}} onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </LogoutWrap>
  );
};
