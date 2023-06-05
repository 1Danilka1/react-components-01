// import logo from './logo.svg';
import './App.css';
import User from './components/User';
import user from "../src/user.json"

function App() {
  return (
    <>
      <User username = {user.username} avatar = {user.avatar} tag={user.tag}
                location={user.location}
                stats={user.stats}/>
    </>
  );
}

export default App;

