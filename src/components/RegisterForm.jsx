import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/thunks';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const currentForm = event.currentTarget;

    dispatch(
      register({
        name: currentForm.elements.name.value,
        email: currentForm.elements.email.value,
        password: currentForm.elements.password.value,
      })
    );
    currentForm.reset(); 
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          title="Enter your name"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          title="Enter your email"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          title="Enter your password"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
