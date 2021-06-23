import { useEffect, useState } from "react";
import { Cabecera } from "./components/Cabecera";
import { ListaAmigos } from "./components/ListaAmigos";

function App() {
  const urlApi = "http://localhost:3001/amigos/";
  const [listaAmigos, setListaAmigos] = useState([]);
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const [modificandoAmigo, setModificandoAmigo] = useState(false);
  const [amigoFormulario, setAmigoFormulario] = useState(null);

  const getListaAmigos = async () => {
    const resp = await fetch(urlApi);
    const datos = await resp.json();
    setListaAmigos(datos);
  };

  useEffect(() => getListaAmigos(), []);

  return (
    <div className="container">
      <Cabecera
        listaAmigos={listaAmigos}
        setListaAmigos={setListaAmigos}
        numeroAmigos={listaAmigos.length}
        formularioAbierto={formularioAbierto}
        setFormularioAbierto={setFormularioAbierto}
        urlApi={urlApi}
        modificandoAmigo={modificandoAmigo}
        setModificandoAmigo={setModificandoAmigo}
        amigoFormulario={amigoFormulario}
        setAmigoFormulario={setAmigoFormulario}
      />
      <main className="principal row">
        <section className="col-12">
          <ListaAmigos
            listaAmigos={listaAmigos}
            setListaAmigos={setListaAmigos}
            urlApi={urlApi}
            foamigoFormulario={amigoFormulario}
            setAmigoFormulario={setAmigoFormulario}
            rmularioAbierto={formularioAbierto}
            setFormularioAbierto={setFormularioAbierto}
            setModificandoAmigo={setModificandoAmigo}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
