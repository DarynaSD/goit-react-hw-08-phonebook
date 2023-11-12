import { useAuth } from "hooks/useAuth";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";
import { AuthNav } from "./AuthNav";
import { Header } from "./styled/Parts.styled";




export const AppBar = () => {
  const { isLoggedIn } = useAuth(); 

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
