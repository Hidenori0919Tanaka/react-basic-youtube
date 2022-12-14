import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1'
import Basic2 from './components/Basic2'

function App() {
  return (
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
      {/* < Basic1 name="Hooks" /> */}
      <Basic2 />
    </div>
  );
}

export default App;
