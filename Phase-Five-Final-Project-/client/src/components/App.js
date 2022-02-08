
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LandingPage from './LandingPage';
import Login from './Login';



function App() {

const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);




  return (


    <div className="app">
    <LandingPage user={user} setUser={setUser} />
    </div> 


    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   );
}

export default App;
