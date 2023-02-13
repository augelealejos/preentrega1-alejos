import './NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const categories = [
  { id: 1, name: 'Panadería' },
  { id: 2, name: 'Pastelería' }
]

const NavBar = () => {
  return (
    <div className='NavBar'>
      <NavLink className='link-primary' to='/'><strong>Catalina</strong></NavLink>
      <nav className='NavBarMenu'>
        <NavLink className={({ isActive }) => isActive ? 'link-light bg-primary' : 'link-primary'} to='/'>Inicio</NavLink>
        {categories.map(caterory =>
          <NavLink className={({ isActive }) => isActive ? 'link-light bg-primary' : 'link-primary'} key={caterory.id} to={`/category/${caterory.id}`}>{caterory.name}</NavLink>)
        }
      </nav>
      <NavLink className='link-primary' to='/cart'><CartWidget /></NavLink>
    </div>
  );
}

export default NavBar;
