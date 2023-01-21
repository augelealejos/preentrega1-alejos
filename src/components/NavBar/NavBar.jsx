import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
      <div className='NavBar'>
        <NavLink className='link-primary' to='/'><strong>Catalina</strong></NavLink>
        <nav className='NavBarMenu'>
            <NavLink className={({ isActive })=> isActive ? 'link-light bg-primary' : 'link-primary'} to='/'>Inicio</NavLink>
            <NavLink className={({ isActive })=> isActive ? 'link-light bg-primary' : 'link-primary'} to='/category/1'>Panadería</NavLink>
            <NavLink className={({ isActive })=> isActive ? 'link-light bg-primary' : 'link-primary'} to='/category/2'>Pastelería</NavLink>
            <NavLink className={({ isActive })=> isActive ? 'link-light bg-primary' : 'link-primary'} to='/suscripcion'>Suscripción</NavLink>
            <NavLink className={({ isActive })=> isActive ? 'link-light bg-primary' : 'link-primary'} to='/sucursales'>Sucursales</NavLink>
            <NavLink className={({ isActive })=> isActive ? 'link-light bg-primary' : 'link-primary'} to='/recetas'>Recetas</NavLink>
            <NavLink className={({ isActive })=> isActive ? 'link-light bg-primary' : 'link-primary'} to='/acerca-de'>Acerca de</NavLink>
        </nav>
        <NavLink className='link-primary' to='/cart'><CartWidget/></NavLink>
      </div>
    )
}

export default NavBar
