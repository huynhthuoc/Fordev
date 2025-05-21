import Button from '~/Ui';
import useScrollY from '~/utils/useScrollY';
import './Header.scss';
import { Link } from 'react-router';

const Header = () => {
  const scrollY = useScrollY();
  return (
    <header className={scrollY > 50 ? 'header header-animation' : 'header'}>
      <div className="logo">
        <Link to="/">ForDev</Link>
      </div>

      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ducoment">Ducoment</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/learn">Learn Code</Link>
          </li>
        </ul>
      </div>

      <Button title="Log in"></Button>
    </header>
  );
};

export default Header;
