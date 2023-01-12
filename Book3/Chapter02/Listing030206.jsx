import WelcomeMessage from './WelcomeMessage';

function WelcomeScreen({ loggedIn }) {
  return (
    <div>
      {loggedIn && <WelcomeMessage />}
      Note: if you don't see the welcome message, you're not logged in.
    </div>
  );
}

export default WelcomeScreen;
