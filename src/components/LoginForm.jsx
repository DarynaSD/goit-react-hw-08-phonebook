import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/thunks';
import { Button, Input, InputLabelWrapper } from './styled/Parts.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const currentForm = e.currentTarget;

    dispatch(
      logIn({
        email: currentForm.elements.email.value,
        password: currentForm.elements.password.value,
      })
    );
    currentForm.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputLabelWrapper>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          //pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Enter your email"
          required
          id="email"
        />
      </InputLabelWrapper>

      <InputLabelWrapper>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          //pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Enter your password"
          required
          id="password"
        />
      </InputLabelWrapper>

      <Button type="submit">Login</Button>
    </form>
  );
};
