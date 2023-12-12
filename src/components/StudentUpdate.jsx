import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function StudentUpdate() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState();
  const [noInfo, setNoInfo] = useState(false);

  useEffect(() => {
    const existingStudents = JSON.parse(localStorage.getItem('students'));
    const tempSelectedUser = existingStudents.find(
      (student) => student.id === Number(studentId)
    );
    if (!existingStudents || !tempSelectedUser) {
      setNoInfo(true);
    }

    setSelectedStudent(tempSelectedUser);
  }, []);

  const handleSubmit = (values) => {
    const tempStudentList = JSON.parse(localStorage.getItem('students')).filter(
      (s) => s.id !== Number(studentId)
    );

    tempStudentList.push(values);

    localStorage.setItem('students', JSON.stringify(tempStudentList));
    navigate('/');
  };

  if (noInfo) {
    return <div>No se ha encontrado el alumno</div>;
  }

  if (selectedStudent) {
    return (
      <Formik
        initialValues={selectedStudent}
        onSubmit={(values) => handleSubmit(values)}
      >
        {() => (
          <Form>
            <h3>Editar alumno XXX</h3>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="ri-user-line" />
              </span>
              <Field
                name="name"
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="ri-user-line" />
              </span>
              <Field
                name="surname"
                className="form-control"
                placeholder="Apellidos"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="ri-calendar-schedule-line" />
              </span>
              <Field name="age" className="form-control" placeholder="Edad" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="ri-pie-chart-line" />
              </span>
              <Field
                name="average"
                className="form-control"
                placeholder="Nota media"
              />
            </div>
            <ul className="list-group my-3">
              <li className="list-group-item">Cursos</li>
              <li className="list-group-item">
                <Field
                  className="form-check-input me-1"
                  type="checkbox"
                  id="en"
                  name="courses"
                  value="en"
                />
                <label className="form-check-label stretched-link" htmlFor="en">
                  Inglés
                </label>
              </li>
              <li className="list-group-item">
                <Field
                  className="form-check-input me-1"
                  type="checkbox"
                  id="fr"
                  name="courses"
                  value="fr"
                />
                <label className="form-check-label stretched-link" htmlFor="fr">
                  Francés
                </label>
              </li>
              <li className="list-group-item">
                <Field
                  className="form-check-input me-1"
                  type="checkbox"
                  id="ru"
                  name="courses"
                  value="ru"
                />
                <label className="form-check-label stretched-link" htmlFor="ru">
                  Ruso precolombino
                </label>
              </li>
            </ul>
            <div className="input-group">
              <span className="input-group-text">
                <i className="ri-file-text-line" />
              </span>
              <Field
                name="comments"
                as="textarea"
                className="form-control"
                placeholder="Detalles íntimos"
              ></Field>
            </div>
            <button type="submit" className="btn btn-primary float-end mt-3">
              Crear
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
