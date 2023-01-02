import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className="conteiner">
        <input type="file" className="file" />
        <button className="btn">Заменить аватар</button>
      </div>
      </header>
    </div>
  );
}

export default App;
