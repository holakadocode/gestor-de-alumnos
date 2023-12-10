import StudentAdd from './components/StudentAdd';
import StudentList from './components/StudentList';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ColegioApp
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"  href="#">
                  Listado
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nuevo Alumno
                </a>
              </li>
            </ul>
            <span className="">
              <a className="nav-link"  href="#">
                Mi cuenta
              </a>
            </span>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <StudentList />
        {/* <StudentAdd /> */}
      </div>
    </>
  );
}

export default App;
