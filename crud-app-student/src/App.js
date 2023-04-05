import logo from "./logo.svg";
import "./App.css";
import Login from "./Page/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import index from './component/Teacher/index'

import { Link } from "react-router-dom";
import Main from "./component/Student/Main";
import create from "./component/Student/CreateStudent";
import createTeacher from './component/Teacher/CreateTeacher'

function App() {
  return (
    <>
      <div className="container">
        <div className="zen-header">
          <h2>
            <span className="material-symbols-outlined">school</span>Zen Class
          </h2>
        </div>
        <div className="main">
          <div className="sidebar">
            <div className="zen-headind">
              <h5 className="text-center">
                <span className="material-symbols-outlined">
                  dashboard_customize
                </span>
                Dashboard
              </h5>
            </div>
            <div className="side-menu">
              <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
                <ul>
                  <li>
                    <Link to="/Main">Student</Link>
                  </li>

                  <li>
                    <Link to='/index'>Teacher</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="content-area">
            <Routes>
              <Route path="main" Component={Main}>
                <Route path="create" Component={create} />
                <Route path="login" Component={Login} />
              </Route>
              <Route path="index" Component={index} >
              <Route path="create" Component={createTeacher} />
                <Route path="login" Component={Login} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
