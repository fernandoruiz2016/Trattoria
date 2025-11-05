import pizza from "../assets/pizza.jpg";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="header-1">
          <p>Reserva tu mesa</p>
          <h1>Pizzas artesanales, ambiente acogedor</h1>
          <p>
            Reserva una mesa en segundos. Escoge una fecha, hora y número de personas.
            Tendremos listo tu lugar con una calurosa bienvenida.
          </p>
        </div>

        <div className="hero-image">
          <img src={pizza} alt="Pizza artesanal" />
        </div>
      </div>
    </section>
  )
}
