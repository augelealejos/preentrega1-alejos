import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
      <div className='NavBar'>
        <span>Catalina</span>
        <nav className='NavBarMenu'>
            <a href="/productos">Productos</a>
            <a href="/productos-ocasion">Productos por ocasión</a>
            <a href="/suscripcion">Suscripción</a>
            <a href="/sucursales">Sucursales</a>
            <a href="/recetas">Recetas</a>
            <a href="/acerca-de">Acerca de</a>
        </nav>
        <CartWidget/>
      </div>
    )
}

export default NavBar
