import Messenger from "./component/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";


function App() {
  const clientId='1053457697551-tc5tsobuqk3o3nfq5ftvu3r46u7r6lqe.apps.googleusercontent.com'
  return (
    < GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </ GoogleOAuthProvider>
  );
}

export default App;
