import './App.css';
import Board from './components/boards/Board';

function App() {
  return (
    <div className="app">
      <div className="app_navbar">
        <h2>Display Navbar</h2>
      </div>
      <div className="app_boards_outer">
        <div className="app_boards">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>  
    </div>
  );
}

export default App;
