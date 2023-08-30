import './css/App.css';
import TodoList from './components/TodoList';

function App () {
  return (
    <div className="App">
      <div className="nav-bar">
        <nav>
          <li>
            <a href={'/'}>Home</a>
          </li>
          <li>
            <a href={'/'}>Done List</a>
          </li>
          <li>
            <a href={'/'}>Help</a>
          </li>
        </nav>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
