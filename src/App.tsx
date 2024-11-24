import { Link, Outlet } from 'react-router-dom';
import './style.scss';

export const App = () => {
  return (
    <div className="app">
      <div>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
