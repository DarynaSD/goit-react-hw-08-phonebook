import { AuthLink } from "./styled/Parts.styled";

export const AuthNav = () => {

  return (
    <div style={{ marginBottom: 40 }}>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login" style={{ marginRight: 140 }}>
        Login
      </AuthLink>
    </div>
  );
};
