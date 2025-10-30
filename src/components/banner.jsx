import './banner.css'

export const Banner = () => {
    return (
        <>
            <div className='banner'>
                <img src="/banner.webp" alt="Banner para reservar" className='banner-img' />
                <div className="banner-overlay"></div>
                <div className='banner-content'>
                    <h1>Un sabor de Italia a tu paladar</h1>
                    <p>Experimenta la autentica comida italiana con nosotros</p>
                    <button>Reserva una mesa</button>
                </div>
            </div>
        </>
    )
}