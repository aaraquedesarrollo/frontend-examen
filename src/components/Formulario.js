import { useState } from "react";

export const Formulario = (props) => {
  const {
    setFormularioAbierto,
    urlApi,
    listaAmigos,
    setListaAmigos,
    modificandoAmigo,
    setModificandoAmigo,
    amigoFormulario,
    setAmigoFormulario,
  } = props;

  const [amigoNombre, setAmigoNombre] = useState(
    amigoFormulario ? amigoFormulario.nombre : ""
  );
  const [amigoApellido, setAmigoApellido] = useState(
    amigoFormulario ? amigoFormulario.apellido : ""
  );
  const [amigoValoracion, setAmigoValoracion] = useState(
    amigoFormulario ? amigoFormulario.valoracion : 0
  );

  const cerrarFormulario = () => {
    setFormularioAbierto(false);
    setAmigoFormulario(null);
    setModificandoAmigo(false);
  };

  console.log(urlApi);

  const submitearAmigo = async (e, nombre, apellido, valoracion) => {
    e.preventDefault();

    const amigoNuevo = { nombre, apellido, valoracion };

    let metodo = {};

    if (!modificandoAmigo) {
      metodo = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(amigoNuevo),
      };
    } else {
      metodo = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(amigoNuevo),
      };
    }

    const resp = await fetch(
      `${urlApi}${modificandoAmigo ? amigoFormulario.id : ""}`,
      metodo
    );

    if (resp.ok) {
      const amigoResponse = await resp.json();
      if (modificandoAmigo) {
        setListaAmigos(
          listaAmigos.map((amigo) =>
            amigo.id === amigoFormulario.id ? { ...amigoResponse } : amigo
          )
        );
      } else {
        setListaAmigos([...listaAmigos, amigoResponse]);
      }
    }

    cerrarFormulario();
  };

  return (
    <form
      noValidate
      className="row"
      onSubmit={(e) =>
        submitearAmigo(e, amigoNombre, amigoApellido, amigoValoracion)
      }
    >
      <div className="from-group col-3">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          value={amigoNombre}
          onChange={(e) => setAmigoNombre(e.target.value)}
        ></input>
      </div>
      <div className="from-group col-3">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          className="form-control"
          value={amigoApellido}
          onChange={(e) => setAmigoApellido(e.target.value)}
        ></input>
      </div>
      <div className="from-group col-3">
        <label htmlFor="valoracion">Valoración:</label>
        <select
          id="valoracion"
          value={amigoValoracion}
          onChange={(e) => setAmigoValoracion(e.target.value)}
        >
          <option value="" hidden>
            Selecciona valoración
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="col-3">
        <button type="submit" className="btn boton">
          {!modificandoAmigo ? "Crear" : "Modificar"}
        </button>
        <button type="button" className="btn boton" onClick={cerrarFormulario}>
          Cancelar
        </button>
      </div>
    </form>
  );
};
