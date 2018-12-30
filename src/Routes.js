import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importar páginas para las rutas
import Login from "./pages/Login";

const Routes =  () => {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
    </Router>
  );
}

export default Routes;
