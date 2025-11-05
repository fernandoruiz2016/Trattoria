import { useState } from "react";
import "./reserva.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { ConfirmBox } from '../components/ConfirmBox'

export function Reserva() {
    const [guests, setGuests] = useState("2 guests");
    const [selectedTime, setSelectedTime] = useState(null);

    const times = [
        "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
        "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
        "9:00 PM", "9:30 PM"
    ];

    const [confirmed, setConfirmed] = useState(false)

    return (
        <>
            <Header></Header>
            <div className="App">
                <Hero />
                <section className="reservation-section">
                    <div className="reservation-card">
                        {!confirmed && (
                            <>
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
                            </>
                        )}

                        {!confirmed && (
                            <div className="actions">
                                <button className="primary-btn" onClick={() => setConfirmed(true)}>
                                    Confirmar reserva
                                </button>
                            </div>
                        )}
                        {confirmed && <ConfirmBox />}
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
