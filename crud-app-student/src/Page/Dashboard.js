import React from "react";
import '.././App.css'
import { Link, Outlet } from "react-router-dom";


export default function Dashboard() {
  return (
    <>
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
              <Link to="/">Dashboard</Link>
            </h5>
          </div>
          <div className="side-menu">
            <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
              <ul>
                <li>
                  <Link to="/table">Student</Link>
                </li>

                <li>
                  <Link to="/teacher">Teacher</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      
      
      
      </div>  
    </>
  );
}
