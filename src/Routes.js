import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importar páginas para las rutas
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes =  () => {
  return (
    <Router>
      <Fragment>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Fragment>
    </Router>
  );
}

export default Routes;
