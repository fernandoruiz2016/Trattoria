import './menu.css'

export const Menu = ( { titulo="Titulo", imagen, alt } ) => {
    return (
        <>
        <div className='menu-inicio'>
            <img src={imagen} alt={alt} className='menu-inicio-img' />
            <div className="menu-inicio-overlay"></div>
            <h3>{titulo}</h3>
        </div>
        </>
    )
}