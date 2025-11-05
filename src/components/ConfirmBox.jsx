import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './ConfirmBox.css'

export function ConfirmBox() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    const t = setTimeout(() => setAnimate(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="confirm-container">
      <div className={["check", animate ? "bounce-in" : ""].join(" ")}>✔</div>
      <h3>¡Tu reserva está confirmada!</h3>
      <p>Hemos enviado un correo de confirmación a tu correo.</p>

      <div className="details">
        <p><strong>Fecha:</strong> 17/11/2025</p>
        <p><strong>Horario:</strong> 6:00 PM</p>
        <p><strong>Personas:</strong> 2 Personas</p>
        <p><strong>Nombre:</strong> Ramiro Perez</p>
        <p><strong>Teléfono:</strong> +51 999 999 999</p>
        <p><strong>Correo:</strong> example@email.com</p>
        <p><strong>Ocasión:</strong> Cumpleaños</p>
        <p><strong>Notas:</strong> Quiero una mesa cerca a la ventana</p>
      </div>

      <Link to="/" className="btn">Regresar a Inicio</Link>
    </div>
  )
}
