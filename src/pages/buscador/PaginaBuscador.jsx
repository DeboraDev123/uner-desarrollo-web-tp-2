import React, { useState, useEffect } from 'react';
import handleCRUD from '../../utils/handleCrud';
import FiltroBusqueda from './FiltroBusqueda';
import BuscadorAlojamiento from './BuscadorAlojamiento';
import {
  crudAlojamientosEndpoints,
  crudImagenes,
} from '../../dbEndpointsAlojamiento';
import { crudTipoAlojamientosEndpoints } from '../../dbEndpoints';
import './PaginaBuscador.css';

const PaginaBuscador = ({
  titulo = undefined,
  mostrarFiltro = true,
  cantidad = 0,
  estado,
}) => {
  const intialState = {
    data: [],
    loading: true,
    done: false,
    error: null,
  };
  const [alojamientos, setAlojamientos] = useState(intialState);
  const [alojamientosJoined, setAlojamientosJoined] = useState(intialState);
  const [alojamientosFiltrados, setAlojamientosFiltrados] =
    useState(intialState);
  const [tipoAlojamientos, setTipoAlojamientos] = useState(intialState);
  const [imagenes, setImagenes] = useState(intialState);

  const cargaInicial = async () => {
    await Promise.all([
      handleCRUD(crudAlojamientosEndpoints.readAll, undefined, setAlojamientos),
      handleCRUD(
        crudTipoAlojamientosEndpoints.readAll,
        undefined,
        setTipoAlojamientos
      ),
      handleCRUD(crudImagenes.readAll, undefined, setImagenes),
    ]);
  };

  useEffect(() => {
    cargaInicial();
  }, []);

  useEffect(() => {
    if (alojamientosJoined.done) {
      if (cantidad > 0 || estado) {
        let filtrados = [...alojamientosJoined.data];

        if (estado) {
          filtrados = filtrados.filter((alojamiento) => {
            return alojamiento.Estado === estado;
          });
        }
        if (cantidad > 0) {
          filtrados = filtrados.slice(0, cantidad);
        }

        setAlojamientosFiltrados((prev) => {
          return {
            ...prev,
            done: true,
            loading: false,
            data: filtrados,
          };
        });
      } else {
        setAlojamientosFiltrados((prev) => {
          return {
            ...prev,
            done: true,
            loading: false,
          };
        });
      }
    }
  }, [alojamientosJoined]);

  useEffect(() => {
    if (alojamientos.done && tipoAlojamientos.done && imagenes.done) {
      setAlojamientosJoined((prev) => {
        return {
          ...prev,
          loading: false,
          done: true,
          data: alojamientos.data.map((alojamiento) => {
            return {
              ...alojamiento,
              TipoAlojamiento: tipoAlojamientos.data.filter(
                (tipo) =>
                  tipo.idTipoAlojamiento === alojamiento.idTipoAlojamiento
              )[0]?.Descripcion,
              Imagenes: imagenes.data.filter(
                (imagen) => imagen.idAlojamiento === alojamiento.idAlojamiento
              ),
            };
          }),
        };
      });
    }
  }, [alojamientos, tipoAlojamientos, imagenes]);

  return (
    <div className={mostrarFiltro ? 'pagina-buscador' : ''}>
      {mostrarFiltro && (
        <>
          <h2 className='titulo'>Encontrá tu próximo alojamiento</h2>
          <FiltroBusqueda
            tipoAlojamientos={tipoAlojamientos.data}
            alojamientos={alojamientosJoined}
            setAlojamientosFiltrados={setAlojamientosFiltrados}
          ></FiltroBusqueda>
        </>
      )}
      {mostrarFiltro ||
      (!mostrarFiltro && alojamientosFiltrados.data.length > 0) ? (
        <BuscadorAlojamiento
          titulo={titulo}
          alojamientos={alojamientosFiltrados}
        ></BuscadorAlojamiento>
      ) : (
        ''
      )}
    </div>
  );
};

export default PaginaBuscador;
