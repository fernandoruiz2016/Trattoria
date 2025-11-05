import './banner.css'
import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <>
            <div className='banner'>
                <img src="/banner.webp" alt="Banner para reservar" className='banner-img' />
                <div className="banner-overlay"></div>
                <div className='banner-content'>
                    <h1>Un sabor de Italia a tu paladar</h1>
                    <p>Experimenta la autentica comida italiana con nosotros</p>
                    <Link to="/reserva" className='boton-reserva'>Reserva una mesa</Link>
                </div>
            </div>
        </>
    )
}