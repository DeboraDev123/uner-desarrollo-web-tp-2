import React, { useState } from 'react';
import "./Contact.css";

const Formulario = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datosFormulario);
  
    setDatosFormulario({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value
    });
  };

  return (
    <main>
      <div className="contacto">
      <h1>Contacto</h1>
      <h2>Ingresá los datos para tu reserva</h2>
      </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="nombre" >Nombre:</label>
            <input 
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={datosFormulario.nombre}
            onChange={handleChange}
            required
            />
          <label htmlFor="email">E-mail:</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="ej.correo@ejemplo.com"
            value={datosFormulario.email}
           onChange={handleChange}
            required
            />
          <label htmlFor="telefono">Teléfono:</label>
            <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            value={datosFormulario.telefono}
            onChange={handleChange}
            required
            />
          <label htmlFor="mensaje">Mensaje:</label>
            <textarea
            id="mensaje"
            name="mensaje"
            className="mensajetextarea"
            placeholder="Escribe tu mensaje aquí"
            value={datosFormulario.mensaje}
            onChange={handleChange}
            required
            ></textarea>
          <button className="icon-btn btn-index ml-30" type="submit">ENVIAR</button>
          <div className="datos-usuario">
            <h2>Información del Usuario:</h2>
            <p><strong>Nombre:</strong> {datosFormulario.nombre}</p>
            <p><strong>Email:</strong> {datosFormulario.email}</p>
            <p><strong>Teléfono:</strong> {datosFormulario.telefono}</p>
            <p><strong>Mensaje:</strong> {datosFormulario.mensaje}</p>
          </div>
        </form>
    </main>
  );
}

export default Formulario;
