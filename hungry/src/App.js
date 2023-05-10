import "./App.css";
import { Route, Routes } from "react-router-dom";
import { closedRoutes, openRoutes } from "./Configs/Routes";

function App() {
  const isLoggedIn = false;
  return (
    <div className="app">
      <Routes>
        {isLoggedIn
          ? closedRoutes.map((routes) => {
              <Route path={routes.path} element={routes.component} />;
            })
          : openRoutes.map((routes) => {
              <Route path={routes.path} element={routes.component} />;
            })}
      </Routes>
    </div>
  );
}

export default App;
