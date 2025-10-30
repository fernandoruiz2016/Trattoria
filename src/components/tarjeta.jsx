import './tarjeta.css'

export const Tarjeta = ( { titulo='titulo', descripcion='descripcion', imagen, alt} ) => {
    return (
        <>
        <div className="tarjeta">
            <img src={imagen} alt={alt} className="tarjeta-img"/>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </div>
        </>
    )
}