import './header.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <header>
                <div className='contenedor-logo'>
                    <img src="/Logo.jpeg" alt="Logo Trattoria Bella" className='logo' />
                    <Link to="/" className='titulo'>Trattoria Bella</Link>
                </div>
                <nav>
                    <Link to="/reserva">Reservar</Link>
                    <Link>Menú</Link>
                    <Link>Ubicación</Link>
                    <Link>Contacto</Link>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='hamburger-menu' onClick={toggleMenu} >
                        <path d="M10 35.5H40C41.1067 35.5 42 36.3933 42 37.5C42 38.6067 41.1067 39.5 40 39.5H10C8.89333 39.5 8 38.6067 8 37.5C8 36.3933 8.89333 35.5 10 35.5ZM10 23H40C41.1067 23 42 23.8933 42 25C42 26.1067 41.1067 27 40 27H10C8.89333 27 8 26.1067 8 25C8 23.8933 8.89333 23 10 23ZM10 10.5H40C41.1067 10.5 42 11.3933 42 12.5C42 13.6067 41.1067 14.5 40 14.5H10C8.89333 14.5 8 13.6067 8 12.5C8 11.3933 8.89333 10.5 10 10.5Z" fill="black" stroke="black" />
                    </svg>
                </nav>
                <div className={menuVisible ? "menu-desplegable" : "hidden"}>
                    <Link to="/reserva">Reservar</Link>
                    <Link>Menú</Link>
                    <Link>Ubicación</Link>
                    <Link>Contacto</Link>
                </div>
            </header>
        </>
    )
}