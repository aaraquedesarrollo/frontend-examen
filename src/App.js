import { Cabecera } from "./components/Cabecera";

function App() {
  return (
    <div className="container">
      <Cabecera />
      <main className="principal row">
        <section className="col-12">
          <ul className="lista-amigos row">
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
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
