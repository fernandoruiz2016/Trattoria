import './inicio.css'
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Tarjeta } from "../components/tarjeta";
import { Menu } from "../components/menu";
import { Visitanos } from "../components/visitanos";
import { Footer } from "../components/footer";

export const Inicio = () => {
  return (
    <>
      <Header></Header>
      <section className='seccion' id='seccion-banner'>
        <Banner className='banner'></Banner>
      </section>

      <section className='seccion' id='seccion-destacados'>
        <h2 className='subtitulo'>Nuestros Platos Destacados</h2>
        <div id="contenedor-tarjeta">
          <Tarjeta
            titulo='Pizza Cuatro Quesos'
            descripcion="Mezcla perfecta de parmesano, mozzarela, gouda y cheddar."
            imagen='../4quesos.webp'
            alt="Pizza cuatro quesos"
          ></Tarjeta>
          <Tarjeta
            titulo='Pizza Margarita'
            descripcion="Hecha con tomates, mozzarela y hojas de albahaca."
            imagen='../margarita.jpg'
            alt="Pizza margarita"
          ></Tarjeta>
          <Tarjeta
            titulo='Tiramisú'
            descripcion="Bizcochos bañados en café con capas de crema mascarpone."
            imagen='../tiramisu.webp'
            alt="Tiramisu"
          ></Tarjeta>
        </div>
      </section>

      <section className='seccion' id='seccion-menu'>
        <h2 className='subtitulo'>Explora Nuestro Menú</h2>
        <div className='contenedor-menu'>
          <Menu titulo="Entradas" imagen='../bruschetta.webp' alt="Entradas"></Menu>
          <Menu titulo="Segundos" imagen='../margarita.jpg' alt="Segundos"></Menu>
          <Menu titulo="Postres" imagen='../tiramisu.webp' alt="Postres"></Menu>
          <Menu titulo="Bebidas" imagen='../vinos.webp' alt="Bebidas"></Menu>
        </div>
      </section>

      <section className='seccion' id='seccion-visitanos'>
        <h2 className='subtitulo'>Visítanos</h2>
        <Visitanos></Visitanos>
      </section>

      <Footer></Footer>
    </>
  )
}


