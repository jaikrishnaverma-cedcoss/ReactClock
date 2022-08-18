import logo from './logo.svg';
import Clock from './Components/clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
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
