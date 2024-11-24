import { Link, Outlet } from 'react-router-dom';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div>
        <button onClick={toggleTheme}>Toggle</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
