import { FaTimes, FaStar, FaPencilAlt } from "react-icons/fa";

export const ListaAmigos = (props) => {
  const {
    listaAmigos,
    setListaAmigos,
    urlApi,
    formularioAbierto,
    setFormularioAbierto,
    setModificandoAmigo,
    amigoFormulario,
    setAmigoFormulario,
  } = props;

  const printarEstrellas = (valoracion) => {
    const estrellas = [];
    for (let indice = 0; indice < valoracion; indice++) {
      estrellas.push(<FaStar key={indice + 1} className="icono estrella" />);
    }
    return estrellas;
  };

  const modificarAmigo = (amigo) => {
    setFormularioAbierto(true);
    setAmigoFormulario(amigo);
    setModificandoAmigo(true);
  };

  const borrarAmigo = async (idAmigo) => {
    const resp = await fetch(urlApi + idAmigo, {
      method: "DELETE",
    });
    if (resp.ok) {
      setListaAmigos(listaAmigos.filter((amigo) => amigo.id !== idAmigo));
    }
  };

  return (
    <ul className="lista-amigos row">
      {listaAmigos.map((amigo) => (
        <li key={amigo.id} className="list-unstyled col-3">
          <div className="card-amigo">
            <span>
              Nombre: <span>{amigo.nombre}</span>
            </span>
            <span>
              Apellido: <span>{amigo.apellido}</span>
            </span>
            <span>
              Valoración:
              <span>{printarEstrellas(amigo.valoracion)}</span>
            </span>
            <FaTimes className="icono" onClick={() => borrarAmigo(amigo.id)} />
            <FaPencilAlt
              className="icono"
              onClick={() => modificarAmigo(amigo)}
            />
          </div>
        </li>
      ))}

      {/* <div className="card-amigo">
          <span>
            Nombre: <span>Juan</span>
          </span>
          <span>
            Apellido: <span>Gonzalez</span>
          </span>
          <span>
            Valoración:{" "}
            <span>
              3 estrellas
              <FaStar className="icono" />
            </span>
          </span>
          <FaTimes className="icono" />
          <FaPencilAlt className="icono" />
        </div>
      </li>
      <li className="list-unstyled col-3">
        <div className="card-amigo">
          <span>
            Nombre: <span>Juan</span>
          </span>
          <span>
            Apellido: <span>Gonzalez</span>
          </span>
          <span>
            Valoración: <span>3 estrellas</span>
          </span>
        </div>
      </li>
      <li className="list-unstyled col-3">
        <div className="card-amigo">
          <span>
            Nombre: <span>Juan</span>
          </span>
          <span>
            Apellido: <span>Gonzalez</span>
          </span>
          <span>
            Valoración: <span>3 estrellas</span>
          </span>
        </div> */}
    </ul>
  );
};
