export default function StudentAdd() {
  return (
    <form>
      <h3>Nuevo alumno</h3>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="ri-user-line" />
        </span>
        <input type="text" className="form-control" placeholder="Nombre" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="ri-user-line" />
        </span>
        <input type="text" className="form-control" placeholder="Apellidos" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="ri-calendar-schedule-line" />
        </span>
        <input type="text" className="form-control" placeholder="Edad" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="ri-pie-chart-line" />
        </span>
        <input type="text" className="form-control" placeholder="Nota media" />
      </div>
      <ul className="list-group my-3">
        <li className="list-group-item">Cursos</li>
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" id="en" />
          <label className="form-check-label stretched-link" htmlFor="en">
            Inglés
          </label>
        </li>
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" id="fr" />
          <label className="form-check-label stretched-link" htmlFor="fr">
            Francés
          </label>
        </li>
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" id="ru" />
          <label className="form-check-label stretched-link" htmlFor="ru">
            Ruso precolombino
          </label>
        </li>
      </ul>
      <div className="input-group">
        <span className="input-group-text">
          <i className="ri-file-text-line" />
        </span>
        <textarea
          className="form-control"
          placeholder="Detalles íntimos"
        ></textarea>
      </div>
      <button className="btn btn-primary float-end mt-3">Crear</button>
    </form>
  );
}
