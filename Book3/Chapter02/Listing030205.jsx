import Message from './Listing0303';

function WelcomeScreen({ loggedIn }) {
  let header;
  if (loggedIn) {
    header = (
      <h1>
        <Message message="Welcome" messageType="header" />
      </h1>
    );
  } else {
    header = (
      <header>
        <h1>
          <Message message="Please log in to continue!" messageType="header" />
        </h1>
      </header>
    );
  }
  return { header };
}

export default WelcomeScreen;
