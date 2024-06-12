import React from "react";
import { SiteIcon } from "../icons/SiteIcon";
import CardList from "../pages/cards/CardList";
import Opinion from "./opinion/Opinion";
import { listaOpiniones } from "./opinion/listaOpiniones";
import Carrusel from "./carrusel/Carrusel";
import { useHistory } from "react-router-dom";
import lista from "../data/BD_alojamientos.json";
import Buscador from "../pages/buscador/buscador";

const HomeMain = () => {
  const history = useHistory();

  return (
    <main className="main main-index">
      <div className="chapa"></div>
      <section className="contenido">
        <h1>Tu lugar en el mundo</h1>
        <p>
          Encontrá en un solo sitio el lugar perfecto para descansar y
          reconectar con vos mismo.
        </p>
        <p>Podrás elegir el alojamiento que se adapte a tus necesidades.</p>
        <p>Estas a un click de distancia de ese lugar de ensueño</p>
        <button
          onClick={() => history.push("/buscar")}
          className="icon-btn btn-index"
        >
          <SiteIcon className={"nav-logo-icon"}></SiteIcon>
          Buscar Alojamiento
        </button>
      </section>
      <section className="sobre-chapa">
        <Buscador titulo="Recomendados"></Buscador>
        {/* <CardList titulo="Recomendados" lista={lista.alojamientos} />{" "} */}
      </section>
      <section className="sobre-chapa">
        <h2>{"Lo que dicen nuestros clientes"}</h2>

        <Carrusel>
          {listaOpiniones.map((opinion, index) => {
            return <Opinion key={index} opinion={opinion} />;
          })}
        </Carrusel>
      </section>
    </main>
  );
};

export default HomeMain;
