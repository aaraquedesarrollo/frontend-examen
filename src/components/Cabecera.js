export const Cabecera = () => {
  return (
    <header class="cabecera row">
      <h1 className="col-12">Gestión de mis 6 amigos</h1>
      <div class="col-2">
        <button type="button" className="btn boton col-12">
          Crear amigo
        </button>
      </div>
      <div className="col-12">
        <form noValidate onSubmit="" className="row">
          <div className="from-group col-3">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" className="form-control"></input>
          </div>
          <div className="from-group col-3">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" className="form-control"></input>
          </div>
          <div className="from-group col-3">
            <label htmlFor="valoracion">Valoración:</label>
            <select id="valoracion">
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
              Crear
            </button>
            <button type="button" className="btn boton">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};
