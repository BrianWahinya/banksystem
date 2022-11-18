import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainContext } from "./context/mainContext.jsx";
import { Login, Register, Dashboard } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  // Various route objects with their configs
  const appsRoutes = [
    { id: "login", comp: <Login />, path: "/" },
    { id: "register", comp: <Register />, path: "/register" },
    { id: "dashboard", comp: <Dashboard />, path: "/dashboard" }
  ];
  return (
    <MainContext.Provider value={{ user: "trial", lang: "en" }}>
      <div className="App">
        <Router>
          <Routes>
            {appsRoutes.map((routeItem) => {
              const { id, comp, path } = routeItem;
              return <Route key={id} path={path} element={comp} />;
            })}
          </Routes>
        </Router>
      </div>
    </MainContext.Provider>
  );
}
