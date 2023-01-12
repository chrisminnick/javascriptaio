import WelcomeMessage from './WelcomeMessage';
import Login from './Login';

function Welcome({ loggedIn }) {
  return <div>{loggedIn ? <WelcomeMessage /> : <Login />}</div>;
}

export default Welcome;
