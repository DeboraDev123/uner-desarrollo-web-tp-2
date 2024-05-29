import React from 'react';
import './About.css';
import AboutImages from '../components/AboutImages';

const About = () => {
  return (
    <section class="about-section">
      <h1 class="about-title">Acerca</h1>
      <p class="about-paragraph">
    Alojar es una empresa de reservas líder dedicada a
  ofrecer experiencias de viaje personalizadas y sin problemas. Nuestra
  gama completa de servicios incluye reservas de vuelos, reservaciones de
  hoteles, alquileres de coches y paquetes turísticos. Con un equipo de
  consultores de viajes expertos y tecnología de vanguardia, nos
  aseguramos de que nuestros clientes reciban las mejores ofertas,
  adaptadas a sus necesidades y preferencias únicas. Desde viajes de
  negocios hasta vacaciones de placer, atendemos a individuos, grupos y
  clientes corporativos por igual. Nuestro compromiso con la excelencia,
  la confiabilidad y la satisfacción del cliente nos ha ganado una
  reputación como una de las empresas de reservas más confiables en la
  industria.
    {' '}
  <a href="https://maps.app.goo.gl/3sddg8Ve1AJFT4k19">
    <i class="fa-solid fa-location-dot custom-icon"></i>
    Estamos aca!
    </a>
    </p>
    <AboutImages />
</section>
);
};
export default About;
