import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState();


  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem('students')) ?? []);
  }, []);

  console.log(students);

  if (students === undefined) {
    return <div>Cargando...</div>;
  }

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
        {students?.map((student) => (
          <tr key={student.id}>
            <th>
              <Link to={`/actualizar-alumno/${student.id}`}>
                {student.name}
              </Link>
            </th>
            <td>{student.surname}</td>
            <td>{student.age}</td>
            <td>{student.courses.length}</td>
            <td>
              <span className="btn btn-sm btn-primary me-1" title="Editar">
                <i className="ri-pencil-line" />
              </span>
              <span className="btn btn-sm btn-danger" title="Eliminar">
                <i className="ri-delete-bin-line" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
