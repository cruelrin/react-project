import './App.css';
import { List } from './components/List';

function App() {
  return (
    <div id="root">
      <header>
        <img className="logo" src="logo.svg" alt="Logo" />
      </header>
      <main>
        <List />
      </main>
      <footer>
        <p className="read-the-docs">Read the documentation for more information.</p>
      </footer>
    </div>
  );
}

export default App;
