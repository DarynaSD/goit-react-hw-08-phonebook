import { useAuth } from "hooks/useAuth";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";
import { AuthNav } from "./AuthNav";




export const AppBar = () => {
  const { isLoggedIn } = useAuth(); 

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};