import './css/App.css';
import { NavLink, Outlet } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <div className="nav-bar">
        <nav>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/done'}>Done List</NavLink>
          </li>
          <li>
            <NavLink to={'/help'}>Help</NavLink>
          </li>
        </nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
