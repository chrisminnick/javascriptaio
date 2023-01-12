import GoogleLogo from './GoogleLogo';
import SearchBox from './SearchBox';
import SignInButton from './SignInButton';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import SideBar from './SideBar';

function App() {
  return (
    <div>
      <div>
        <GoogleLogo />
        <SearchBox />
        <SignInButton />
      </div>
      <NavBar />
      <div>
        <SearchResults />
        <SideBar />
      </div>
    </div>
  );
}
export default App;
