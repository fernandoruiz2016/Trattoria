import './visitanos.css'
// import { ReactComponent as LocationIcon } from '../assets/location-dot-solid-full.svg';

export const Visitanos = () => {
    return (
        <>
            <div className='visitanos'>
                <aside className='visitanos-info'>
                    <div className='grupo-info'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19.7344C10 11.5938 16.7188 5 25 5C33.2812 5 40 11.5938 40 19.7344C40 29.0547 30.6094 40.2266 26.6875 44.4844C25.7656 45.4844 24.2266 45.4844 23.3047 44.4844C19.3828 40.2266 9.99219 29.0547 9.99219 19.7344H10ZM25 25C27.7578 25 30 22.7578 30 20C30 17.2422 27.7578 15 25 15C22.2422 15 20 17.2422 20 20C20 22.7578 22.2422 25 25 25Z" fill="#A89B8B" />
                        </svg>
                        <div className='texto'>
                            <h3>Dirección</h3>
                            <p>Avenida Miguel Grau 999, Barranco</p>
                        </div>
                    </div>
                    <div className='grupo-info'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5155 6.9531C16.8983 5.47654 15.2889 4.69529 13.7577 5.10935L13.328 5.22654C8.28109 6.60154 3.96859 11.4922 5.2264 17.4453C8.12484 31.1172 18.8827 41.875 32.5545 44.7734C38.5155 46.039 43.3983 41.7187 44.7733 36.6718L44.8905 36.2422C45.3123 34.7031 44.5233 33.0937 43.0545 32.4843L35.453 29.3203C34.1639 28.7812 32.6717 29.1562 31.7811 30.2422L28.7655 33.9297C23.2733 31.2031 18.8514 26.6406 16.3123 21.039L19.7655 18.2265C20.8514 17.3437 21.2186 15.8515 20.6873 14.5547L17.5155 6.9531Z" fill="#A89B8B" />
                        </svg>
                        <div className='texto'>
                            <h3>Teléfono</h3>
                            <p>+51 999 999 999</p>
                        </div>
                    </div>
                    <div className='grupo-info'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 5C36.0469 5 45 13.9531 45 25C45 36.0469 36.0469 45 25 45C13.9531 45 5 36.0469 5 25C5 13.9531 13.9531 5 25 5ZM23.125 14.375V25C23.125 25.625 23.4375 26.2109 23.9609 26.5625L31.4609 31.5625C32.3203 32.1406 33.4844 31.9062 34.0625 31.0391C34.6406 30.1719 34.4062 29.0156 33.5391 28.4375L26.875 24V14.375C26.875 13.3359 26.0391 12.5 25 12.5C23.9609 12.5 23.125 13.3359 23.125 14.375Z" fill="#A89B8B" />
                        </svg>
                        <div className='texto'>
                            <h3>Horario</h3>
                            <p>Lunes a Sábado: 5pm a 10pm <br />Domingo: Cerrado</p>
                        </div>
                    </div>
                </aside>
                <aside className='contenedor-mapa'>
                    <iframe
                        className='mapa'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15602.369650124692!2d-77.02277639374967!3d-12.1400158908536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1761696620209!5m2!1sen!2spe"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    
                </aside>
            </div>
        </>
    )
}