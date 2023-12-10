export default function StudentList() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="col-4">Nombre</th>
          <th className="col-4">Apellidos</th>
          <th className="col-1">Edad</th>
          <th className="col-1">Cursos</th>
          <th className="col-2">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <a href="#">Jaime</a>
          </th>
          <td>Kado</td>
          <td>65</td>
          <td>2</td>
          <td>
            <span className="btn btn-sm btn-primary me-1" title="Editar">
              <i className="ri-pencil-line" />
            </span>
            <span className="btn btn-sm btn-danger" title="Eliminar">
              <i className="ri-delete-bin-line" />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
