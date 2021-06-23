import { useState } from "react";
import { Formulario } from "./Formulario";

export const Cabecera = (props) => {
  const {
    listaAmigos,
    setListaAmigos,
    formularioAbierto,
    setFormularioAbierto,
    urlApi,
    modificandoAmigo,
    setModificandoAmigo,
    amigoFormulario,
    setAmigoFormulario,
  } = props;

  const crearAmigo = () => {
    setFormularioAbierto(true);
  };

  return (
    <header className="cabecera row">
      <h1 className="col-12">Gestión de mis {listaAmigos.length} amigos</h1>
      {!formularioAbierto ? (
        <div className="col-2">
          <button
            type="button"
            className="btn boton col-12"
            onClick={crearAmigo}
          >
            Crear amigo
          </button>
        </div>
      ) : (
        <div className="col-12">
          <Formulario
            setFormularioAbierto={setFormularioAbierto}
            urlApi={urlApi}
            listaAmigos={listaAmigos}
            setListaAmigos={setListaAmigos}
            modificandoAmigo={modificandoAmigo}
            setModificandoAmigo={setModificandoAmigo}
            amigoFormulario={amigoFormulario}
            setAmigoFormulario={setAmigoFormulario}
          />
        </div>
      )}
    </header>
  );
};
