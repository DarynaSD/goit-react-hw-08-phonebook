import { useAuth } from "hooks/useAuth";

export default function Home() {

  const { isLoggedIn } = useAuth();
  return (
    <>
      {!isLoggedIn && <div>Welcome to Phonebook!</div>}
    </>
  );
}
