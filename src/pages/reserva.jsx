import { useState } from "react";
import "./reserva.css";
import pizza from "../assets/pizza.jpg";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function Reserva() {
    const [guests, setGuests] = useState("2 guests");
    const [selectedTime, setSelectedTime] = useState(null);

    const times = [
        "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
        "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
        "9:00 PM", "9:30 PM"
    ];

    return (
        <>
            <Header></Header>
            <div className="App">
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
                <section className="reservation-section">
                    <div className="reservation-card">
                        <h2>Detalles de la reserva</h2>

                        <div className="reservation-inputs">
                            <div>
                                <label>Fecha</label>
                                <input type="date" />
                            </div>

                            <div>
                                <label>Invitados</label>
                                <select
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                >
                                    <option>1 Persona</option>
                                    <option>2 Personas</option>
                                    <option>3 Personas</option>
                                    <option>4 Personas</option>
                                    <option>5 Personas</option>
                                </select>
                            </div>
                        </div>

                        <div className="time-buttons">
                            {times.map((time) => (
                                <button
                                    key={time}
                                    className={selectedTime === time ? "selected" : ""}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>

                        <div className="contact-info">
                            <input type="text" placeholder="Nombre completo" />
                            <input type="tel" placeholder="Teléfono" />
                            <input type="email" placeholder="Correo electrónico" />
                            <input type="text" placeholder="Ocasión (opcional)" />
                            <textarea placeholder="Petición especial (opcional)" />
                        </div>

                        <button className="confirm-btn">Confirmar reserva</button>
                        <p className="info-text">
                            Guardaremos tu mesa por 15 minutos. ¿Necesitas ayuda? Llama al (+51) 998 653 322
                        </p>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}
